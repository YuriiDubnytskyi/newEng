import React ,{FC}from 'react';
import "./UnitsPage.css"
import CarouselUnits from "./CarouselUnits/CarouselUnits";
import {NavLink} from "react-router-dom"

type UnitsPageProps = {
    isAdmin:boolean
}

const UnitsPage:FC<UnitsPageProps> = (props:UnitsPageProps) => {
    const isAdmin:boolean=props.isAdmin;

    return (
        <div className="main-content">
            <div className="container mt-5">
                <div className="row margin-t">
                    <div className="col-lg-10 mx-auto">
                        <h1 className="text-uppercase text-center"><strong>Unit №</strong></h1>
                    </div>
                </div>
                <CarouselUnits isAdmin={isAdmin}/>
                {isAdmin?
                    <div className="row justify-content-center">
                    <div className="my-auto ">
                            <NavLink to="/addunit" className="btn btn-dark rounded-pill text-center ">Add Unit</NavLink>
                        </div>
                    </div>
                    :<></>
                }
            </div>
        </div>
    )
};

export default UnitsPage