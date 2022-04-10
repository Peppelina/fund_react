import React, {useState} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";


const PostForm = ({createPost}) => {

    const [post, setPost] = useState(
        {title: '', content: '', author: ''}
    )

    const addNewPost = (e) => {
        e.preventDefault() // чтоб страница не перезагружалась
        const newPost = {
            ...post
        }
        createPost(newPost)
        setPost({title: '', content: '', author: ''})
    }

    const isDisabledButton = post.title === '' || post.content==='' || post.author==='' ? true : false

    return (
        <form action="">
            <MyInput
                value={post.author}
                onChange={e => setPost({...post, author: e.target.value})}
                type="text"
                placeholder={'Автор'}/>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder={'Название поста'}/>
            <MyInput
                value={post.content}
                onChange={e => setPost({...post, content: e.target.value})}
                type="text"
                placeholder={'Описание поста'}/>
            <MyButton onClick={addNewPost}
                      disabled={isDisabledButton}>
                Создать пост
            </MyButton>
        </form>
    );
};

export default PostForm;