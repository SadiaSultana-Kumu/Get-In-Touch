import React from 'react';
import './List.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faPlus} from '@fortawesome/free-solid-svg-icons'
const List = (props) => {
    const {image, name,username,phone,email,salary} = props.users;
    return (
        <div className="list">
            <div>
                <img src={image} alt=""/>
            </div>
            <div className="info-padding">
               <h4 className="user-name">{name}</h4>
                <p><small>@{username}</small></p>
                <p><small>{phone}</small></p>
                <p><small>{email}</small></p>
                <p><small>{salary}</small></p>
                <button className="connect-button" onClick={() => props.handlerAddUser (props.handlerAddUser)}><FontAwesomeIcon icon={faPlus} /> Get In Touch </button>
            </div>
        </div>
    );
};

export default List;