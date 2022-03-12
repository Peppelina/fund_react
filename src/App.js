import './App.css';
import {useMemo, useState} from "react";
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/MySelect/MySelect";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'CJavaScript', body: 'BDescription'},
        {id: 2, title: 'APyton', body: 'CDescription'},
        {id: 3, title: 'BАлгоритмический язык', body: 'ADescription'},
    ])

    const [sortBy, setSortBy] = useState('') // хранит тип сортировки

    const [search, setSearch] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
        // вернет оратно если true, если id=3 и выбранный тоже 3, это false (3!=3), и уберет его
    }

    function getSortPosts(posts) {
        console.log('ФУНКЦИЯ ОТРАБОТЛАААААААААААААААААААААААААААААААААААААААААААА')
        if (sortBy) {
            const newPosts = [...posts].sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
            return newPosts
        }
        else return posts
    }

    const sortedPosts = useMemo(() => getSortPosts(posts), [sortBy, posts] ) // вызовет функцию когда что то изменится

    const sortedAndFilteredPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()) ) // вернет те посты которые содержат то что в поисковой строке(инпут)
    }, [search, sortedPosts] ) // регаирует на пооисковую строку и на сортированные посты


    return (
        <div className="App">
            <PostForm createPost={createPost}/>
            <br/>
            <MyInput
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={'Поиск'}
            />
            <MySelect
                sortBy={sortBy}
                setSortBy={setSortBy}
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]}
            />
            {posts.length !== 0
                ? <PostList
                    removePost={removePost}
                    posts={sortedAndFilteredPosts}
                    title='Список постов'/>
                : <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>}
        </div>
    );
}

export default App;
