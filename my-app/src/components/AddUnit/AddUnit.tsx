import React, {ChangeEvent, FC, useState} from 'react';
import {bindActionCreators} from "redux";
import {showUnits} from "../../store/actions/actions";
import {connect} from "react-redux";
import * as API from "./../../api/api"
import {useHistory} from "react-router-dom";
import {IaddUnits} from "../../interfaces/IaddUnits";
import {IreduceUnits} from "../../interfaces/IreduceUnits";

type AddUnitProps = {
    units:IreduceUnits;
    showUnits:() => {type:string};
}

const AddUnit:FC<AddUnitProps> = (props:AddUnitProps) => {

    const [numberUnits,setNumberUnits] = useState<string>('');

    const onChangeNumbers = (e:ChangeEvent<HTMLInputElement>) => {
        setNumberUnits(e.target.value)
    };

    const history = useHistory();

    const addUnits = ():void => {
        const arrayUnit: { name:string, version:number, keyWords:number }[]= [];
        for(let i:number = 0 ;i < parseInt(numberUnits); i++){
            let numI:number = i+1;
            let number:string = ""+props.units.keyUnit+"00"+ numI;
            console.log(""+props.units.keyUnit+"00"+ numI);
            arrayUnit.push({name:"Unit",version:i+1,keyWords:parseInt(number)});
        }

        const data:IaddUnits = {units:arrayUnit,key:props.units.keyUnit};

        API.postUnits(data)
            .then(res => console.log(res))
            .then(() => history.push('/books'))
    };

    return (
        <div className="main-content">
            <div className="container mt-5">
                <div className="row margin-t">
                    <div className="col-lg-10 mx-auto">
                        <h1 className="text-uppercase text-center"><strong>Add Unit</strong></h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="flex-column justify-content-center text-center">
                    <div className="form-group">
                        <label>Unit number</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Unit number" onChange={onChangeNumbers}/>
                    </div>
                    <p className="btn btn-dark btn-xl  rounded-pill " role="button" onClick={addUnits}>Add Unit</p>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state:{units:IreduceUnits}) => {
    return {
        units:state.units
    }
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        dispatch,
        ...bindActionCreators({
            showUnits
        }, dispatch)
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AddUnit);