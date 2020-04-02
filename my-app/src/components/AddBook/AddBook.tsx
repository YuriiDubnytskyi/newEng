import React, {FC, useState,ChangeEvent} from 'react';
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {showBooks,getBooks} from "../../store/actions/actions";
import * as API from "./../../api/api"
import {IaddBook} from "../../interfaces/IaddBook";
import {IreduceBooks} from "../../interfaces/IreduceBooks";
import {getArrayAndId} from "../../services/service";

type arrayBooks={ name:string, version:string, keyUnit:number }[]

type AddBookProps = {
    books:IreduceBooks;
    showBooks:() => {type:string};
    getBooks:(dataBooks:arrayBooks,id:number) => {type:string,id:number,dataBooks:arrayBooks};
}

const AddBook:FC<AddBookProps> = (props:AddBookProps) => {

    const [bookName,setBookName] = useState<string>('');
    const [bookVersion,setBookVersion] = useState<string>('');
    const [unitKey,setUnitKey] = useState<number>(0);

    const history = useHistory();

    const onChangeName = (e:ChangeEvent<HTMLInputElement>) => {
        setBookName(e.target.value)
    };
    const onChangeVersion = (e:ChangeEvent<HTMLInputElement>) => {
        setBookVersion(e.target.value)
    };
    const onChangeUnitKey = (e:ChangeEvent<HTMLInputElement>) => {
        setUnitKey(parseInt(e.target.value))
    };

    const addBook = ():void => {
        const addBook:IaddBook = {
            id:props.books.id,
            base:props.books.fullBooks,
            book:{name:bookName,version:bookVersion,keyUnit:unitKey}
        };
        API.putBook(addBook)
            .then((res) => getArrayAndId(res.data,props.getBooks,2) )
            .then(() => props.showBooks())
            .then(() => history.push("/books"))
    };

    return (
        <div className="main-content">
            <div className="container mt-5">
                <div className="row margin-t">
                    <div className="col-lg-10 mx-auto">
                        <h1 className="text-uppercase text-center"><strong>Add Book</strong></h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="flex-column justify-content-center text-center">
                    <div className="form-group">
                        <label>Book name</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Book name" onChange={onChangeName}/>
                        <label>Book version</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Book version" onChange={onChangeVersion}/>
                        <label>Units number</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Units number" onChange={onChangeUnitKey}/>
                    </div>
                    <p className="btn btn-dark btn-xl  rounded-pill " role="button" onClick={addBook}>Add Book</p>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state:{books:IreduceBooks}) => {
    return {
        books:state.books
    }
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        dispatch,
        ...bindActionCreators({
            showBooks,getBooks
        }, dispatch)
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AddBook);