import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import Counter from "./components/Counter";
import UserList from "./components/UserList";


function App(props) {
    return (
        <div style={{alignItem:"center"}}>
            <h1>Hello world !! , {props.currentUser}</h1>
            <input type="text" value={props.currentUser} onChange={(e) => props.changeCurrentUser(e.target.value)}/>
            <hr/>

            <Counter />
            <button onClick={props.dowCount}>-</button>
            <button onClick={props.upCount}>+</button>

            <hr/>
            <UserList></UserList>
        </div>

    );
}


const mapStateToProps = state => {
    console.log('test', state);
    return state.global;
};

const mapDispatchToProps = dispatch => {
    return {

        dowCount: () => dispatch({type:'dowCount', payload: 1}),
        upCount: () => dispatch({type:'upCount', payload: 1}),
        changeCurrentUser: (name) => dispatch({type:'CHANGE_CURRENT_USER', payload: name}),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
