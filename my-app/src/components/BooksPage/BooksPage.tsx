import React ,{FC,useEffect}from 'react';
import "./BooksPage.css"
import CarouselBooks from "./CarouselBooks/CarouselBooks";
import {NavLink} from "react-router-dom"
import { bindActionCreators } from "redux";
import { reset} from "../../store/actions/actions";
import {connect} from "react-redux";
import {IreduceBooks} from "../../interfaces/IreduceBooks";
type BooksPageProps = {
    isAdmin:boolean;
    reset:() => {type:string}
}

const BooksPage:FC<BooksPageProps> = (props:BooksPageProps) => {
    const isAdmin:boolean=props.isAdmin;
    useEffect(()=>{
        props.reset()
    },[]);
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


export default connect(mapStateToProps,mapDispatchToProps)(BooksPage)