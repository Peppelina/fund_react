import React, {useEffect, useState} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

const UpdatePostForm = ({updatePost, selectedPost}) => {


    const [post, setPost] = useState(
        {title: '', content: '', author: ''}
    )

    useEffect(
        () => {
            setPost({...selectedPost})
        },[selectedPost]
    )

    const update_post = (e) => {
        e.preventDefault() // чтоб страница не перезагружалась
        updatePost({...post})
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
            <MyButton onClick={update_post}
                      disabled={isDisabledButton}>
                Сохранить отредактированный пост
            </MyButton>
        </form>
    );
};

export default UpdatePostForm;