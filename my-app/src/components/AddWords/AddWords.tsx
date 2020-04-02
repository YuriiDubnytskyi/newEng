import React, {ChangeEvent, FC, useState} from 'react';
import {connect} from "react-redux";
import * as API from "./../../api/api"
import {useHistory} from "react-router-dom";
import {IaddWords} from "../../interfaces/IaddWords";
import {IreduceWords} from "../../interfaces/IreduceWords";

type AddWordsProps = {
    words:IreduceWords;
}

const AddWords:FC<AddWordsProps> = (props:AddWordsProps) => {

    const rows:number=5;

    const [words,setWords] = useState<string[]>([]);

    const onChangeWords = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        const word:string = e.target.value;
        const arr:string[] = word.split(",");
        setWords(arr);
    };

    const history = useHistory();

    const addWords = ():void => {
        const data:IaddWords = {word:words,id:props.words.keyWords};
        API.putWords(data)
            .then(res => console.log(res))
            .then(() => history.push("/books"))
    };

    return (
        <div className="main-content">
            <div className="container mt-5">
                <div className="row margin-t">
                    <div className="col-lg-10 mx-auto">
                        <h1 className="text-uppercase text-center"><strong>Add Words</strong></h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="flex-column justify-content-center text-center">
                    <div className="form-group">
                        <label>Add Words wish this --,-- </label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={rows} onChange={onChangeWords}></textarea>
                    </div>
                    <p className="btn btn-dark btn-xl  rounded-pill " role="button" onClick={addWords}>Add Words</p>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state:{words:IreduceWords}) => {
    return {
        words:state.words
    }
};

export default connect(mapStateToProps)(AddWords)