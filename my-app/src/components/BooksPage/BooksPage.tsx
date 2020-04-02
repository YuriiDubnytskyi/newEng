import React ,{FC}from 'react';
import "./BooksPage.css"
import CarouselBooks from "./CarouselBooks/CarouselBooks";
import {NavLink} from "react-router-dom"

type BooksPageProps = {
    isAdmin:boolean;
}

const BooksPage:FC<BooksPageProps> = (props:BooksPageProps) => {
    const isAdmin:boolean=props.isAdmin;
    return (
        <div className="main-content">
            <div className="container mt-5">
                <div className="row margin-t">
                    <div className="col-lg-10 mx-auto">
                        <h1 className="text-uppercase text-center"><strong>English Books</strong></h1>
                    </div>
                </div>
                <CarouselBooks/>
                {isAdmin?
                    <div className="row justify-content-center">
                        <div className="my-auto ">
                            <NavLink to="/addbook" className="btn btn-dark rounded-pill text-center ">Add Book</NavLink>
                        </div>
                    </div>
                    : <></>
                }
            </div>
        </div>
    )
};

export default BooksPage