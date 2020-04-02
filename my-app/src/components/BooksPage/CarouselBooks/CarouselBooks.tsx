import React ,{FC,useEffect,useState}from 'react';
import BookPage from "../BookPage/BookPage";
import "./CarouselBooks.css"
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import { showBooks, prew,nexting} from "../../../store/actions/actions";
import {IreduceBooks} from "../../../interfaces/IreduceBooks";


type CarouselBooksProps = {
    prew:() => {type:string};
    nexting: () => {type:string};
    state:IreduceBooks;
    showBooks:() => {type:string};
}

const CarouselBooks:FC<CarouselBooksProps> = (props:CarouselBooksProps) => {

    const [showBooks,setShowBooks] = useState<{ name:string, version:string, keyUnit:number }[]>([]);
    useEffect(()=>{
        setShowBooks(props.state.showBooking)
    });

    const prew = ():void => {
        props.prew();
        props.showBooks();
    };
    const next = ():void => {
        props.nexting();
        props.showBooks();
    };

    return (
        <div>
            <div className="row justify-content-center text-center">
                <a className="carousel-control-next carousel" role="button" data-slide="next" onClick={next}>
                    <p className="carousel-control-next-icon"></p>
                </a>
                {showBooks.length!==0?showBooks.map((el:{ name:string, version:string, keyUnit:number })=><BookPage name={el.name} version={el.version} keyunit={el.keyUnit}/>):<p>Eror</p>}
                <a className="carousel-control-prev carousel" role="button" data-slide="prev" onClick={prew}>
                    <p className="carousel-control-prev-icon"></p>
                </a>
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
            showBooks,prew,nexting
        }, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CarouselBooks);