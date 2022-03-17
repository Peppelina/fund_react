import './App.css';
import {useEffect, useMemo, useState} from "react";
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import PostFilter from "./components/PostFilter/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./components/hooks/usePosts";
import axios from 'axios';
import PostService from "./components/API/PostService";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./components/hooks/useFetching";
import {getPageCount, getPagesArray} from "./utils/pages";

function App() {
    /*[
            {id: 1, title: 'CJavaScript', body: 'BDescription'},
            {id: 2, title: 'APyton', body: 'CDescription'},
            {id: 3, title: 'BАлгоритмический язык', body: 'ADescription'},
        ]*/
    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({sortBy: '', search: ''})
    const [modal, setModal] = useState(false)
    const sortedAndFilteredPosts = usePosts(posts, filter.sortBy, filter.search)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setpage] = useState(1)

    let pagesArray = getPagesArray(totalPages)

    const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalPages = response.headers['x-total-count']
        setTotalPages(getPageCount(totalPages, limit))
        }
    )

    useEffect(() => {
        fetchPosts()
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
        // вернет оратно если true, если id=3 и выбранный тоже 3, это false (3!=3), и уберет его
    }

    return (
        <div className="App">
            <MyButton
                style={{marginTop: 30}}
                onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>
            <MyModal visiable={modal} setVisiable={setModal}>
                <PostForm createPost={createPost}/>
            </MyModal>

            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError && <h1>Произшла ошибка ${postError}</h1>}
            {isPostsLoading
            ? <Loader/>
                : <PostList
                    removePost={removePost}
                    posts={sortedAndFilteredPosts}
                    title='Список постов'/>
            }
            <div className={'pageWrapper'}>
                {pagesArray.map(p =>
                    <MyButton className={'page'}> {p} </MyButton>)}
            </div>

        </div>
    );
}

export default App;
