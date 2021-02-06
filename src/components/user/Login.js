import React from 'react';
import "./TestRedux.css";
import { setUser, logout, selectUser } from "./userSlice";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    console.log(user.user);

    const loginToApp = () => {
        dispatch(setUser({ user: "names" }));
    }
    return (
        <div>
            <h1>Login Component</h1>
            {user.user && <h2>{user.user} Logged in</h2>}
            <button className="toggle" onClick={loginToApp}>Click</button>
            <button className="toggle">Click</button>
        </div>
    )
}

export default Login;
