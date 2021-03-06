import React from 'react'
import {Button} from "@material-ui/core"
import "./Login.css"
import {auth,provider} from './firebase'
import { useStateValue } from './StateProvider'
import {actionTypes} from './reducer'
function Login() {

    const [{}, dispatch]= useStateValue();

    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            console.log(result.user);
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            });
            dispatch({
                type:actionTypes.SET_SESSION,
                uid:result.user.uid,
                displayName:result.user.displayName,
                photoURL:result.user.photoURL
            })
        })
        .catch((err)=>alert(err.message));
        
    };

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn.dribbble.com/users/10193/screenshots/258736/logo.png" alt="talk ja"/>
            <div className="login__text">
                <h1>Sign in to Talk JA</h1>
            </div>
            <Button onClick={signIn}>Sign In with Google</Button>
            </div>

            
        </div>
    )
}

export default Login
