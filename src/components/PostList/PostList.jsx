import React from 'react';
import PostItem from "../PostItem/PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, removePost, update}) => {
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post._id}
                        timeout={500}
                        classNames="post"
                    >
                    <PostItem  removePost={removePost}
                               number={index+1}
                               post={post}
                               update = {update}
                               />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;