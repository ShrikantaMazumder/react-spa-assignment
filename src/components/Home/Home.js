import React, { useEffect, useState } from 'react';
import './Home.css';
import fakeData from '../../fakeData';
import User from '../User/User';
import Information from '../Information/Information';

const Home = () => {
    const [users,setUsers] = useState(fakeData);
    const [friends,setFriends] = useState([])
    const addFriend = (user) => {
        const newFriend = [...friends,user];
        setFriends(newFriend);
       
    }
    return (
        <div className="home-section">
            <div className="users">
                {
                    users.map(user => <User addFriend={addFriend} user={user}></User>)
                }
            </div>
            <div className="information">
                <Information friends={friends}></Information>
            </div>
        </div>
        
    );
};

export default Home;