import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
        const [posts, setPosts] = useState([]);
        useEffect( ()=> {
            const url=`http://jsonplaceholder.typicode.com/posts`;
            fetch(url)
                .then(res => res.json())
                .then(data =>setPosts(data));
        },[])

        return (
        <div>
            <h1 className='bg-blue-500 text-3xl p-4 mt-2 m-10 text-bold text-yellow-300'>Total Number of Posts:{posts.length}</h1>
            {
                posts.map(post=> <Link className='bg-green-400 text-white mr-5 mt-20 font-bold'
                    key={post.id} 
                    to={`/posts/${post.id}`}
                    > {post.id}</Link>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Posts;