import './App.css';
import {useState} from "react";
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/MySelect/MySelect";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'CJavaScript', body: 'BDescription'},
        {id: 2, title: 'AJavaScript', body: 'CDescription'},
        {id: 3, title: 'BJavaScript', body: 'ADescription'},
    ])

    const [sortBy, setSortBy] = useState('') // хранит тип сортировки

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
        // вернет оратно если true, если id=3 и выбранный тоже 3, это false (3!=3), и уберет его
    }

    function getSortPosts(posts) {
        if (sortBy) {
            const newPosts = [...posts].sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
            return newPosts
        }
        else return posts
    }
    const sortedPosts = getSortPosts(posts)

    return (
        <div className="App">
            <PostForm createPost={createPost}/>
            <br/>
            <MyInput placeholder={'Поиск'}/>
            <MySelect
                sortBy={sortBy}
                setSortBy={setSortBy}
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описаню'}
                ]}
            />
            {posts.length !== 0
                ? <PostList
                    removePost={removePost}
                    posts={sortedPosts}
                    title='Список постов'/>
                : <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>}
        </div>
    );
}

export default App;
