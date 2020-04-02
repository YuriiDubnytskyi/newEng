import React,{FC} from 'react';
import {Route,Switch} from 'react-router-dom';
import AddBook from "./../components/AddBook/AddBook";
import AddUnit from './../components/AddUnit/AddUnit';
import AddWords from "./../components/AddWords/AddWords";


const UserPage:FC = () => {
    return (
        <Switch>
            <Route path="/addbook" exact>
                <AddBook/>
            </Route>
            <Route path="/addunit" exact>
                <AddUnit/>
            </Route>
            <Route path="/addwords" exact>
                <AddWords/>
            </Route>
        </Switch>
    );
};

export default UserPage