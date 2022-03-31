import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    },[])

    return (
        <div>
            <h3 className='bg-blue-600 text-white text-3xl ml-80 mr-80 p-3 mt-5'>This is friend details page...</h3>
            <h2 className='bg-zinc-100 text-green-500 text-2xl ml-80 mr-80 p-3 mt-10'>Details of:{friend.name}</h2>
            <p className='bg-zinc-100 text-red-500 text-2xl ml-80 mr-80 p-3'>
                <h3>ID: {friend.id}</h3>
            </p>
            <p className='bg-zinc-100 text-red-500 text-2xl ml-80 mr-80 p-3'>
                <h3>Name: {friend.name}</h3>
            </p>
            <p className='bg-zinc-100 text-red-500 text-2xl ml-80 mr-80 p-3'>
                <h3>User Name: {friend.username}</h3>
            </p>
            <p className='bg-zinc-100 text-red-500 text-2xl ml-80 mr-80 p-3'>
                <h3>E-mail: {friend.email}</h3>
            </p>
            <p className='bg-zinc-100 text-red-500 text-2xl ml-80 mr-80 p-3'>
                <h3>Phone: {friend.phone}</h3>
            </p>
            <p className='bg-zinc-100 text-red-500 text-2xl ml-80 mr-80 p-3'>
                <h3>Website: {friend.website}</h3>
            </p>
            <p className='bg-zinc-100 text-red-500 text-2xl ml-80 mr-80 p-3'>
                <h3>Address: {friend.address?.city}</h3>
            </p>
        </div>
    );
};

export default FriendDetails;