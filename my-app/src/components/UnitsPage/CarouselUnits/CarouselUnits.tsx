import React, {FC, useEffect, useState} from 'react';
import UnitPage from "../UnitPage/UnitPage";
import "./CarouselUnits.css"
import { nexting, prew,showUnits} from "../../../store/actions/actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {IreduceUnits} from "../../../interfaces/IreduceUnits";

type CarouselUnitsProps = {
    prew:() => {type:string};
    nexting: () => {type:string};
    state:IreduceUnits;
    showUnits:() => {type:string};
    isAdmin:boolean;
}

const CarouselUnits:FC<CarouselUnitsProps> = (props:CarouselUnitsProps) => {
    const isAdmin:boolean=props.isAdmin;

    const [showUnits,setShowUnits] = useState<{ name:string, version:string, keyWords:number }[]>([]);
    useEffect(()=>{
        setShowUnits(props.state.showUniting)
    });

    const prew = ():void => {
        props.prew();
        props.showUnits();
    };
    const next = ():void => {
        props.nexting();
        props.showUnits();
    };

    return (
        <div>
            <div className="row justify-content-center text-center">
                <a className="carousel-control-next carousel" role="button" data-slide="next" onClick={next}>
                    <p className="carousel-control-next-icon " ></p>
                </a>
                {showUnits.length!==0?showUnits.map((el:{ name:string, version:string, keyWords:number })=><UnitPage name={el.name} version={el.version} keyWords={el.keyWords} isAdmin={isAdmin}/>):<p>Eror</p>}
                <a className="carousel-control-prev carousel" role="button" data-slide="prev" onClick={prew}>
                    <p className="carousel-control-prev-icon" ></p>
                </a>
            </div>
        </div>
    )
};

const mapStateToProps = ( state:{ units:IreduceUnits } ) => {
    return {
        state: state.units
    }
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        dispatch,
        ...bindActionCreators({
            prew,nexting,showUnits
        }, dispatch)
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(CarouselUnits);