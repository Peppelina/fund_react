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
import UpdatePostForm from "../components/UpdatePostForm/UpdatePostForm";

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
    const [selectedPost, setSelectedPost] = useState({})
    const [modalUpdatePost, setModalUpdatePost] = useState(false)


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

    const removePost = async (id) => {
        await PostService.deletePost(id)
        fetchPosts()

    }

    const changePage = (page) => {
        setCurrentPage(page)
        setFilter({...filter, sortBy: ''})
    }

    const updatePost = async (updatePost) => {
        const newUpdatedPost= await PostService.updatePost(updatePost)
        const newPosts = posts.map(post => {
            if (post._id === newUpdatedPost._id) return newUpdatedPost
            return post
        })
        setPosts(newPosts)
        setModalUpdatePost(false)
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
            <MyModal visiable={modalUpdatePost} setVisiable={setModalUpdatePost}>
                <UpdatePostForm updatePost={updatePost}
                selectedPost={selectedPost}
                />
            </MyModal>

            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError && <h1>Произшла ошибка ${postError}</h1>}
            <PostList
                removePost={removePost}
                posts={sortedAndFilteredPosts}
                title='Список постов'
                update = {
                    (post) => {
                        setSelectedPost(post)
                        setModalUpdatePost(true)
                    }
                }
                />
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
