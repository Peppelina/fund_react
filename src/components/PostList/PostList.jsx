import React from 'react';
import PostItem from "../PostItem/PostItem";
import classes from "./PostList.module.css";

const PostList = ({posts, title}) => {
    return (
        <div>
            <h1>{title}</h1>
            {posts.map(post => <PostItem post={post} key={post.id}/>)}
        </div>
    );
};

export default PostList;