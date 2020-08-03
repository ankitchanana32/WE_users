import React, { useEffect } from "react";
import UserActions from "../../Actions";
import { connect } from "react-redux";

import {
    faEnvelope,
    faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import "./style.css";

const UserDetail = (props) => {


    useEffect(() => {
        props.getUserDetail(props.match.params.id)
    }, [])


    return (
        <div className="user">
            <div className="user-div">
                <div> <img className="user-avatar" src={props.userDetails && props.userDetails.userDetails && props.userDetails.userDetails.data && props.userDetails.userDetails.data.avatar}
                    alt={props.userDetails && props.userDetails.userDetails && props.userDetails.userDetails.data && props.userDetails.userDetails.data.avatar} />
                </div>

                <div>
                    <h3 className="user-details"> {props.userDetails && props.userDetails.userDetails && props.userDetails.userDetails.data && props.userDetails.userDetails.data.first_name + " " + props.userDetails.userDetails.data.last_name}</h3>
                </div>
                <div>
                    {props.userDetails && props.userDetails.userDetails && props.userDetails.userDetails.ad && props.userDetails.userDetails.ad.company}
                </div>
                <div>
                    {props.userDetails && props.userDetails.userDetails && props.userDetails.userDetails.ad && props.userDetails.userDetails.ad.text}
                </div>

                <div >
                    <FontAwesomeIcon icon={faPhoneAlt} ></FontAwesomeIcon>
                    <h6 className="user-details"> +91 1234567899</h6>
                    <FontAwesomeIcon icon={faEnvelope} ></FontAwesomeIcon>
                    <h6 className="user-details">  {props.userDetails && props.userDetails.userDetails && props.userDetails.userDetails.data && props.userDetails.userDetails.data.email}</h6>

                </div>
            </div>

        </div>
    )
}


const mapStateToProps = (state) => {
    return (
        { userDetails: state.UserDetailsReducer }
    )
}
const mapDispatchToProps = {
    getUserDetail: UserActions.getUserDetails
}
export default connect(mapStateToProps, mapDispatchToProps)(UserDetail)

