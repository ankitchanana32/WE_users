import React, { useEffect } from "react";

import UserList from "../UserList";
import UserActions from "../../Actions";
import { connect } from "react-redux";


const AllUsers = (props) => {
    let page = 1;
    let current_page = props.users && props.users.page;
    let total_pages = props.users && props.users.total_pages;
    let items = [];

    useEffect(() => {
        props.getUsersListByPage(page)
    }, [])

    if (total_pages < 5) {
        for (let i = 1; i <= total_pages; i++) {
            items.push(<li key={i} className="page-item"><a className="page-link" onClick={() => { props.getUsersListByPage(i) }} href="#">{i}</a></li>)
        }
    } else {
        for (let i = 1; i <= 5; i++) {
            items.push(<li key={i} className="page-item"><a className="page-link" onClick={() => { props.getUsersListByPage(i) }} >{i}</a></li>)
        }

    }
    return (
        <div className="container">
            <h1> All Users</h1>
            <UserList users={props.users}></UserList>
            <div>
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className={`page-item ${current_page <= 1 ? "disabled" : ""}`}>
                            <a className="page-link" onClick={() => { props.getUsersListByPage(current_page <= 1 ? 1 : current_page - 1) }} href="#!">Previous</a>
                        </li>
                        {items}
                        <li className={`page-item ${current_page >= total_pages ? "disabled" : ""}`}>
                            <a className="page-link" onClick={() => { props.getUsersListByPage(current_page >= total_pages ? total_pages : current_page + 1) }} href="#!">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return (
        {
            users: state.UserListReducer.users,
            logIn: state.UserLogInReducer
        }
    )
}
const mapDispatchToProps = {
    getUsersListByPage: UserActions.getUsersListbyPage
}
export default connect(mapStateToProps, mapDispatchToProps)(AllUsers)