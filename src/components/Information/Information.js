import React from 'react';
import './Information.css';

const Information = (props) => {
const friends = props.friends;
console.log(friends)
const totalSalary = friends.reduce((total,friend) => total+friend.salary,0)


    return (
        <div className="user-inf">
            <h1>Information</h1>
            <p>Total Friends: {friends.length}</p>
            <p>Total Salary: {totalSalary}</p>

            <div>

            </div>
        </div>
    );
};

export default Information;