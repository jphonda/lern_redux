import React from 'react';
import {connect} from "react-redux";

const Counter = (props) => {
    return(
        <div>
            <h3>{props.count}</h3>
        </div>
    )
}



const mapStateToProps = state => {
    console.log('test', state);
    return state.global;
};


export default connect(mapStateToProps)(Counter);