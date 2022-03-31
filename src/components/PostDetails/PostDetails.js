import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    useEffect(()=>{
        const url = `http://jsonplaceholder.typicode.com/posts/${postId}`;
        // console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPost(data));
    },[postId])
    
    return (
        <div>
            <div className="ml-80 mr-80">
                <h1 className='bg-zinc-100 text-blue-700 text-4xl  p-3 mt-10 font-bold'>This is post  Details: {postId}</h1>
                <div className="bg-green-200">
                    <h2 className='text-3xl text-orange-700 font-bold'>{post.title}</h2>
                    <h2 className='text-xl p-3'>{post.body}</h2>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;