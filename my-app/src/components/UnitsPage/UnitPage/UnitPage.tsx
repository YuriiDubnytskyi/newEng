import React ,{FC}from 'react';
import "./UnitPage.css"
import { useHistory} from "react-router-dom"
import {connect} from "react-redux";
import {getWords,keyWord} from "../../../store/actions/actions";
import {bindActionCreators} from "redux";
import * as API from "./../../../api/api"
import {IreduceWords} from "../../../interfaces/IreduceWords";

type UnitPageProps = {
    isAdmin:boolean;
    name:string;
    version:string;
    keyWords:number;
    getWords:(dataWords:string[]) => {type:string,dataWords:string[]};
    keyWord:(key:number) => {type:string,key:number}
}

const UnitPage:FC<UnitPageProps> = (props:UnitPageProps) => {

    const isAdmin:boolean=props.isAdmin;
    const history = useHistory();

    const goWords = () => {
        API.getWord(props.keyWords)
            .then(res => !!res.data?props.getWords(res.data.words)
                :console.log(res))
            .then(res => res ? history.push('/unit'):alert("This unit has not words"))
    };

    const addWords = ():void => {
        props.keyWord(props.keyWords);
        history.push("/addwords")
    };

    return (
        <div className="card m-3" >
            <div className="card-body">
                <h5 className="card-title">{props.name} {props.version}</h5>
                <p className="card-text">Information Information Information Information Information Information ----- --- {props.keyWords}</p>
                <p className="btn btn-dark rounded-pill " onClick={goWords}>Lets Go</p>
                <hr/>
                {isAdmin?<p className="btn btn-dark rounded-pill" onClick={addWords}>Add Words</p>:<></>}
            </div>
        </div>
    )
};
const mapStateToProps = ( state:{ words:IreduceWords } ) => {
    return {
        state: state.words
    }
};
const mapDispatchToProps = (dispatch:any) => {
    return {
        dispatch,
        ...bindActionCreators({
            getWords,keyWord
        }, dispatch)
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(UnitPage);
