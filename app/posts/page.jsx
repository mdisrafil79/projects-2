import React from 'react';

const PostPage = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const post = await res.json();
    return (
        <div>
            <h2>Post Page: {post.length}</h2>
        </div>
    );
};

export default PostPage;