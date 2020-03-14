import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const User = (props) => {
    const user = props.user;
    // console.log(image);
    return (
        <div className="user-section">
            <div className="users-card">
                <img src={user.image} alt="User Image"/>
                <div className="details">
                    <h2>{user.username}</h2>
                    <p>Email: {user.email}</p>
                    <p>Website: {user.website}</p>
                    <p>Phone: {user.phone}</p>
                    <p>${user.salary}</p>
                    <button className="addButton" onClick={() => props.addFriend(props.user)}><FontAwesomeIcon icon={faPlus} /> Add Friend</button>
                    
                    
                </div>
                <div className="user-address">
                    <h5>Address</h5>
                    <p>{user.address.street}</p>
                    <p>{user.address.suite}</p>
                    <p>{user.address.city}</p>
                    <p>{user.address.zipcode}</p>
                </div>
            </div>         
        </div>
        
    );
};

export default User;