"use cache"
import React from 'react';
import Post from '../components/Post';

const PostPage = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const post = await res.json();
    return (
        <div>
            <h2>Post Page: {post.length}</h2>
            <div className='grid grid-cols-3 gap-4'>
                {post.map(post => <Post key={post.id} post={post}/>)}
            </div>
        </div>
    );
};

export default PostPage;