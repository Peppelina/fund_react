import React from 'react';
import PostItem from "../PostItem/PostItem";

const PostList = ({posts, title, removePost}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map((post, index) => <PostItem  removePost={removePost}
                                                   number={index+1}
                                                   post={post}
                                                   key={post.id}/>)}
        </div>
    );
};

export default PostList;