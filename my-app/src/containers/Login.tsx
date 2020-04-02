import React,{FC} from 'react';
import {Route,Switch} from 'react-router-dom';
import LoginPage from "./../components/LoginPage/LoginPage";

const Login:FC = () => {
    return (
        <Switch>
            <Route path="/admin" exact>
                <LoginPage/>
            </Route>
        </Switch>
    );
};

export default Login