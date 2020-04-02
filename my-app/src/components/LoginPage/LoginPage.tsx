import React, {ChangeEvent, FC, useState} from 'react';
import {
    login
} from "../../store/actions/actions"
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { useHistory } from "react-router-dom";
import * as API from "./../../api/api"
import {IreduceLogin} from "../../interfaces/IreduceLogin";

type LoginPageProps = {
    login:() => {type:string}
}

const LoginPage:FC<LoginPageProps> = (props:LoginPageProps) => {

    const [name,setName] = useState<string>('');
    const [password,setPassword] = useState<string>('');

    const history = useHistory();

    const onChangeName = (e:ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    };
    const onChangePassword = (e:ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    };

    const login = ():void => {
        API.getAdmin(name,parseInt(password))
            .then(res => !!res.data && res.data.name === name && res.data.password === parseInt(password) ?
                                    props.login()
                                    :false)
            .then(res => res?history.push("/books"):console.log("err"))
            .then(()=>{
                setName('');
                setPassword('');
            })
    };

    return (
        <div className="container mt-5">
            <div className="row margin-t">
                <div className="col-lg-10 mx-auto">
                    <h1 className="text-uppercase text-center"><strong>Login Form</strong></h1>
                </div>
            </div>
            <div className="flex-column justify-content-center text-center">
                <div className="form-group m-5">
                    <h2>Write admin name</h2>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name" value={name} onChange={onChangeName}/>
                    <h2>Write admin password</h2>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Password" value={password} onChange={onChangePassword}/>
                </div>
                <p className="btn btn-dark btn-xl  rounded-pill " role="button" onClick={login}>LogIn</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state:{login:IreduceLogin}) => {
    return {
        loginUser:state.login
    }
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        dispatch,
        ...bindActionCreators({
                login
            }, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);