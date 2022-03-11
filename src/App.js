import './App.css';
import {useState} from "react";
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";

function App() {

  const [posts, setPosts] = useState([
    {id:1, title: 'JavaScript', body: 'Description'},
    {id:2, title: 'JavaScript', body: 'Description'},
    {id:3, title: 'JavaScript', body: 'Description'},
  ])

 const createPost = (newPost) => {
     setPosts([...posts, newPost])
 }




  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList posts={posts} title='Список постов'/>
    </div>
  );
}

export default App;
