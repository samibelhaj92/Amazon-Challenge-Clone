import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import './Login.css';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
    return;
    }
    if (user) navigate("/dashboard");
    }, [user, loading]);

    return (
    <div className='login'>
        <Link to={'/'}>
        <img
            className='login__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png?20220213013322'
            alt='amazon logo'
        />
        </Link>

        <div className='login__container'>
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input
                    type={'text'}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <h5>Password</h5>
                <input
                    type={'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Link to="/">
                <button 
                    onClick={() => logInWithEmailAndPassword(email, password)}
                    className='login__signInButton'>
                    Sign In
                </button>
                </Link>
            </form>

            <p>
                By signing-in you agree to the AMAZON FAKE CLONE 
                Conditions of Use & Sale. Please see our Privacy Notice,
                our Cookies Notice and our Interest-Based Ads Notice. 
            </p>

            <div className="login__resetButton">
                <Link to="/reset">Forgot Password</Link>
            </div>

            <Link to="/register">
            <button 
                className='login__registerButton'>
                Create your Amazon Account
            </button>
            </Link>
        </div>
    </div>
  )
}

export default Login