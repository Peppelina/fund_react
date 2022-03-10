import './App.css';
import {useState} from "react";
import PostItem from './components/PostItem/PostItem';

function App() {

  const [posts, setPosts] = useState([
    {id:1, title: 'JavaScript', body: 'Description'}
  ])

  return (
    <div className="App">
        <PostItem/>
    </div>
  );
}

export default App;
