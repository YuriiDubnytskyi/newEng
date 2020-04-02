import React , {FC} from 'react';
import {Route,Switch} from 'react-router-dom';
import MainPage from "./../components/MainPage/MainPage";
import BooksPage from "./../components/BooksPage/BooksPage";
import UnitsPage from "./../components/UnitsPage/UnitsPage";
import LearnPage from "./../components/LearnPage/LearnPage";

type UserPageProps = {
    isAdmin:boolean
}

const UserPage:FC<UserPageProps> = (props:UserPageProps) => {
    return (
        <Switch>
            <Route path="/" exact>
                <MainPage/>
            </Route>
            <Route path="/books" exact>
                <BooksPage isAdmin={props.isAdmin}/>
            </Route>
            <Route path="/units" exact>
                <UnitsPage isAdmin={props.isAdmin}/>
            </Route>
            <Route path="/unit" exact>
                <LearnPage/>
            </Route>
        </Switch>
    );
};

export default UserPage