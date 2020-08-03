import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";

const User = (props) => {

    return (

        <tr key ={props.userId}className="table-row">
            <td ><Link to={`/users/${props.userId}`}><img className="table-image" src={props.avatar} alt={props.avatar}/></Link></td>
            <td>{props.userName}</td>
            <td>{props.userEmail}</td>
        </tr>
    )
}

export default User