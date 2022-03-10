import './App.css';
import {useState} from "react";
import PostItem from './components/PostItem/PostItem';

function App() {

  const [posts, setPosts] = useState([
    {id:1, title: 'JavaScript', body: 'Description'},
    {id:2, title: 'JavaScript', body: 'Description'},
    {id:3, title: 'JavaScript', body: 'Description'},
  ])

  return (
    <div className="App">
      {posts.map(post => <PostItem post={post}/>)}
    </div>
  );
}

export default App;
