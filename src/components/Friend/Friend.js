import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name, username, id} = props.friend;

    const navigate = useNavigate();

    const showFriendDetails = () => {
        // const path = `/friend/${id}`;
        const path = `/friend/`+id;
        navigate(path);

    }
    return (
        <div className=''>
            <h2 className='bg-zinc-100 text-green-500 text-2xl ml-80 mr-80 p-3'>Name:{name}</h2>
            {/* <Link className='bg-red-500 mt-5 mb-20 p-3 text-white font-bold' to={'/friend/' +id}>Show Details</Link> */}
            <button onClick={showFriendDetails} className='bg-red-500 mt-5 mb-20 p-3 text-white font-bold'>Deatail about {username}</button>
        </div>
    );
};

export default Friend;