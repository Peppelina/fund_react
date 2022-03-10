import './App.css';
import {useState} from "react";
import PostList from "./components/PostList/PostList";
import MyButton from "./components/UI/button/MyButton";

function App() {

  const [posts, setPosts] = useState([
    {id:1, title: 'JavaScript', body: 'Description'},
    {id:2, title: 'JavaScript', body: 'Description'},
    {id:3, title: 'JavaScript', body: 'Description'},
  ])

  return (
    <div className="App">
      <form action="">
        <input type="text" placeholder={'Название поста'}/>
        <input type="text" placeholder={'Описание поста'}/>
        <MyButton disabled> Создать пост</MyButton>
      </form>
      <PostList posts={posts} title='Список постов 1'/>
    </div>
  );
}

export default App;
