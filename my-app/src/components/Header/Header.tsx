import React ,{FC}from 'react';
import "./Header.css"
import {NavLink} from "react-router-dom"
import {reset} from "../../store/actions/actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {IreduceBooks} from "../../interfaces/IreduceBooks";

type HeaderProps = {
    reset:() => {type:string}
}

const Header:FC<HeaderProps> = (props:HeaderProps) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">DUBNYTSKYI_CORPORATION</NavLink>
            <input type="checkbox" id="navbar-toggle-cbox"/>
            <label htmlFor="navbar-toggle-cbox" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon"></span>
            </label>
            <div className="collapse navbar-collapse"  id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item" >
                        <NavLink className="nav-link" data-toggle="collapse" to="/" >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" data-toggle="collapse" to="/books" onClick={()=>props.reset()}>Books</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" data-toggle="collapse" to="/admin" >Administration</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
const mapStateToProps = ( state:{ books:IreduceBooks } ) => {
    return {
        state: state.books
    }
};
const mapDispatchToProps = (dispatch:any) => {
    return {
        dispatch,
        ...bindActionCreators({
            reset
        }, dispatch)
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Header);