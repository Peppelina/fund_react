import './App.css';
import {useEffect, useMemo, useState} from "react";
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import PostFilter from "./components/PostFilter/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./components/hooks/usePosts";
import axios from 'axios';

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

    useEffect(() => {
        fetchPosts()
    }, [])
    async function fetchPosts() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
    }

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
            <PostList
                removePost={removePost}
                posts={sortedAndFilteredPosts}
                title='Список постов'/>
        </div>
    );
}

export default App;
