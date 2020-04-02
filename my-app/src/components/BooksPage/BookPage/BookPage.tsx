import React ,{FC}from 'react';
import "./BookPage.css"
import { useHistory} from "react-router-dom"
import { getUnits, laptop, large,  showUnits, smart, tablet,keyUnit} from "../../../store/actions/actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as API from "./../../../api/api"
import {getSize} from "../../../services/service";
import {IreduceLogin} from "../../../interfaces/IreduceLogin";

type arrayUnits={ name:string, version:string, keyWords:number }[]

type BookPageProps = {
    name:string;
    version:string;
    keyunit:number;
    large:() => {type:string};
    laptop:() => {type:string};
    tablet:() => {type:string};
    smart:() => {type:string};
    showUnits:() => {type:string};
    keyUnit:(key:number) => {type:string,key:number};
    getUnits:(dataUnits:arrayUnits) => {type:string,dataUnits:arrayUnits};
}

const BookPage:FC<BookPageProps> = (props:BookPageProps) => {
    const history = useHistory();

    const goUnit = () => {
        API.getUnit(props.keyunit)
            .then(res => !!res.data?props.getUnits(res.data.units)
                :false)
            .then(res => res ? getSize():false)
            .then(res => {
                if(res === "large"){
                    props.large();
                    return true
                }else if(res === "laptop"){
                    props.laptop();
                    return true
                }else if(res === "tablet"){
                    props.tablet();
                    return true
                }else if(res === "mobile"){
                    props.smart();
                    return true
                }else{
                    return false
                }
            })
            .then(res => res ? props.showUnits():false)
            .then(()=> props.keyUnit(props.keyunit))
            .then(() => history.push('/units'))
    };

    return (
        <div className="card m-3" >
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.version}</h6>
                <p className="card-text">Information Information Information Information Information  ---- {props.keyunit}</p>
                <p className="btn btn-dark btn-xl  rounded-pill " role="button" onClick={goUnit}>Lets Go</p>
            </div>
        </div>
    )
};

const mapStateToProps = (state:{login:IreduceLogin}) => {
    return {
        loginUser:state.login
    }
};
const mapDispatchToProps = (dispatch:any) => {
    return {
        dispatch,
        ...bindActionCreators({
            getUnits,showUnits,smart,tablet,laptop,large,keyUnit
        }, dispatch)
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(BookPage);