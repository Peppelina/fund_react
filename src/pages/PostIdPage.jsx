import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {

    const params = useParams() /*возвращает парамтры поста*/
    const [post, setPost] = useState({})


    const [fetchPostById, isLoading, error] = useFetching(
        async (id) => {
            const response = await PostService.getById(id)
            setPost(response.data)
        }
    )


    useEffect(() => {
        fetchPostById(params.id)
    }, [])

    return (
        <div>
            <h3>Вы открыли страницу поста с ID: {params.id}</h3>
            {error && <div>Произшла ошибка ${error}</div>}

            {isLoading
                ? <Loader/>
                : <div>
                    {params.id}. <h4>Автор: {post.author}</h4>
                   <h4> Заголовок: {post.title}</h4>
                   <h4> Контент: {post.content}</h4>
                </div>
            }
        </div>
    );
};

export default PostIdPage;