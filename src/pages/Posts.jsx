import '../App.css';
import {useEffect, useState} from "react";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm/PostForm";
import PostFilter from "../components/PostFilter/PostFilter";
import Loader from "../components/UI/Loader/Loader";
import PostList from "../components/PostList/PostList";
import Pagination from "../components/UI/pagination/Pagination";

function Posts() {
    /*[
            {id: 1, title: 'CJavaScript', body: 'BDescription'},
            {id: 2, title: 'APyton', body: 'CDescription'},
            {id: 3, title: 'BАлгоритмический язык', body: 'ADescription'},
        ]*/
    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({sortBy: '', search: ''})
    const [modal, setModal] = useState(false)
    const sortedAndFilteredPosts = usePosts(posts, filter.sortBy, filter.search)
    const [totalPages, setTotalPages] = useState(0) // totalPages === последняя страница
    const [limit, setLimit] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)

    const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
            const [posts, totalCount] = await PostService.getAll(limit, currentPage)
            setPosts(posts)
            setTotalPages(getPageCount(totalCount, limit))
        }
    )

    useEffect(() => {
        fetchPosts()
    }, [currentPage])

    const createPost = async (newPost) => {
        const newPostServer = await PostService.createNewPost(newPost)
        setPosts([...posts, newPostServer])
        if (posts.length===limit) {
            setCurrentPage(totalPages)
        }

        setModal(false)

    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
        // вернет оратно если true, если id=3 и выбранный тоже 3, это false (3!=3), и уберет его
    }

    const changePage = (page) => {
        setCurrentPage(page)
        setFilter({...filter, sortBy: ''})
    }

    return (
        <div className="App">
            <MyButton
                style={{marginTop: 30}}
                onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visiable={modal} setVisiable={setModal}>
                <PostForm createPost={createPost}/>
            </MyModal>

            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError && <h1>Произшла ошибка ${postError}</h1>}
            <PostList
                removePost={removePost}
                posts={sortedAndFilteredPosts}
                title='Список постов'/>
            {isPostsLoading &&
                 <Loader/>
            }
            <Pagination page={currentPage}
                        totalPages={totalPages}
                        changePage={changePage}
            />
        </div>
    );
}

export default Posts;
