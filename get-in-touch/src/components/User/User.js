import React from 'react';
import fakeUsers from '../../fakeUsers/fakeUsers';
import {useState} from 'react';
import './User.css';
import List from '../List/List';
const User = () => {
    const fakeUser= fakeUsers;
    const [users, setUsers] = useState(fakeUser);
    const [user, setUser] = useState([]);
    const handlerAddUser = () => {
        const newUser = [...user,users];
        setUser(newUser);
        
    }
   
    return (
        <div className="user-container">
            <div className="users-container">
                {
                    users.map(infoUsers => <List handlerAddUser={handlerAddUser} users={infoUsers}></List>)
                    
                }
            </div>
             <div className="connection-summery">
                  <h1>Connection: {user.length}</h1>
                 
             </div>
            
        </div>
    );
};

export default User;