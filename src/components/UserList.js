import React from 'react';
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return state.user;
}


const UserList = (props) => {
    return(
        <div>
            <h1>UserList</h1>
            {
                props.lists.map(item => (
                    <p key={item}>{item}</p>
                ))
            }
        </div>
    )
}


export default connect(mapStateToProps)(UserList);