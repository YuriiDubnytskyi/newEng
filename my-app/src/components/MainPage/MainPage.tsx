import React ,{FC}from 'react';
import "./MainPage.css"
import {NavLink} from "react-router-dom"

const MainPage:FC = () => {
    return (
        <div className="main-content-greeting">
        <div className="text-center mt-5 ">
            <div className="container mt-5 align-items-center ">
                <div className="row margin-t-greeting">
                    <div className="col-lg-10 mx-auto">
                        <h1 className="text-uppercase"><strong>You can learn a lot of different words with us</strong></h1>
                    </div>
                </div>
                <div className="col-lg-8 mx-auto">
                    <h2 className="text-faded mb-6 display-8">You can learn more and more words with us and improve your skills</h2>
                    <NavLink className="btn btn-dark btn-xl js-scroll-trigger rounded-pill " role="button" to="/books">Go Learn</NavLink>
                </div>
            </div>
        </div>
        </div>
    )
};

export default MainPage