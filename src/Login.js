import React from 'react';
import "./Login.css";
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
//import { provider } from './firebase';

function Login() { 
    const [state, disaptch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result);
            disaptch({
                type: actionTypes.SET_USER,
                user:result.user
            })
        })
        .catch((error) =>{
            alert(error.message)
        });
    };
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://i.pcmag.com/imagery/reviews/07td46ju7p6lLVb0QGwc5VF-6..v_1569479844.jpg" alt=""/>

                <h1>Sign in to Slack Clone</h1>
                <p>sach.slack.com</p>
                <Button onClick={signIn}>Sign in with Google</Button>

            </div>
            
        </div>
    )
}

export default Login;
