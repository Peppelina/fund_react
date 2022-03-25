import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams() /*возвращает парамтры поста*/
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchPostById, isLoading, error] = useFetching(
        async (id) => {
            const response = await PostService.getById(id)
            setPost(response.data)
        }
    )
    const [fetchComments, isComLoading, ComError] = useFetching(
        async (id) => {
            const response = await PostService.getCommentsByPostId(id)
            setComments(response.data)
        }
    )

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <h1>Вы открыли страницу поста с ID: {params.id}</h1>
            {error && <div>Произшла ошибка ${error}</div>}

            <div> {params.id}. {post.title}</div>

            <h1>Комментарии</h1>

            {ComError && <div>Произшла ошибка ${error}</div>}
            {isComLoading
                ? <Loader/>
                : <div style={{width: 800}}>
                    {
                        comments.map(comm =>
                            <div
                                key={comm.id}
                                style={{marginTop: 15}}>
                                <h3>{comm.name}</h3>
                                <h5>{comm.email}</h5>
                                <div>{comm.body}</div>
                            </div>)
                    }
                </div>
            }
        </div>
    );
};

export default PostIdPage;