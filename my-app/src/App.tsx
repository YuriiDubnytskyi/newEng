import React, {FC,useEffect,useState} from 'react';
import { BrowserRouter} from 'react-router-dom';
import Header from "./components/Header/Header";
import "./App.css"
import {connect} from "react-redux";
import Login from "./containers/Login"
import UserPage from "./containers/UserPage"
import AddInfo from "./containers/AddInfo"
import {getBooks, laptop, large, showBooks, smart, tablet} from "./store/actions/actions";
import {bindActionCreators} from "redux";
import * as API from "./api/api";
import {getSize,getArrayAndId} from "./services/service";
import {IreduceLogin} from "./interfaces/IreduceLogin";
import {IreduceBooks} from "./interfaces/IreduceBooks";

type arrayBooks={ name:string, version:string, keyUnit:number }[]

type AppProps = {
    large:() => {type:string};
    laptop:() => {type:string};
    tablet:() => {type:string};
    smart:() => {type:string};
    showBooks:() => {type:string};
    getBooks:(dataBooks:arrayBooks,id:number) => {type:string,id:number,dataBooks:arrayBooks};
    loginUser:{isAutofication:boolean};
}

const App:FC<AppProps> = (props:AppProps) => {

    useEffect(()=>{
        API.getBooks()
            .then(res => !!res.data ? getArrayAndId(res.data,props.getBooks) :false)
            .then(res => res ? getSize():false)
            .then(res => {
                if(res === "large"){
                    props.large();
                    return true
                }else if(res === "laptop"){
                    props.laptop();
                    return true
                }else if(res === "tablet"){
                    props.tablet();
                    return true
                }else if(res === "mobile"){
                    props.smart();
                    return true
                }else{
                    return false
                }
            })
            .then(res => res ? props.showBooks():console.log("error"))
    },[]);

    return (
        <BrowserRouter>
            <div className="bg-image">
                <Header/>
                <Login/>
                <UserPage isAdmin={props.loginUser.isAutofication}/>
                <AddInfo/>
            </div>
        </BrowserRouter>
    );
};

const mapStateToProps = (state:{login:IreduceLogin,books:IreduceBooks}) => {
    return {
        loginUser:state.login,
        books:state.books
    }
};
const mapDispatchToProps = (dispatch:any) => {
    return {
        dispatch,
        ...bindActionCreators({
            getBooks,showBooks,smart,tablet,laptop,large
        }, dispatch)
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(App);
