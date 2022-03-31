import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data));
    }, [])
    return (
        <div>
            <h2 className='bg-blue-500 text-3xl p-4 mt-2 m-10 text-bold text-yellow-300'>This is Friends Page</h2>
            <h3 className='bg-blue-500 text-2xl p-4 mt-2 m-10 text-bold text-green-300'>Total Number of Friends: {friends.length} </h3>
            {
                friends.map(friend=><Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;