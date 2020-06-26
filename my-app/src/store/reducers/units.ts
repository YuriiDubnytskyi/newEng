import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import {IreduceUnits} from "../../interfaces/IreduceUnits";

type arrayType={ name:string, version:string, keyWords:number }[] |[]

const initialState:IreduceUnits = {
    fullUnits:[],
    showUniting:[],
    indexEnd:6,
    indexStart:0,
    keyUnit:0
};

const getPrewBegin = (arr:arrayType,begin:number) => {
    if(begin-1 < 0){
        return 0
    }else{
        return begin-1
    }
};
const getPrewEnd = (arr:arrayType,end:number,begin:number) => {
    if(begin-1 < 0){
        return end
    }else{
        return end-1
    }
};
const getNextBegin = (arr:arrayType,begin:number,end:number) => {
    if(end === arr.length || end > arr.length){
        return begin
    }else{
        return begin+1
    }
};
const getNextEnd = (arr:arrayType,end:number) => {
    if(end === arr.length || end > arr.length){
        return end
    }else{
        return end+1
    }
};

const units = ( state:IreduceUnits = initialState, action:any ) => {
    switch ( action.type ) {
        case actionTypes.GET_UNITS:
            return updateObject(state,{
                fullUnits:action.dataUnits
            });
        case actionTypes.SET_SHOW_UNITS:
            return updateObject(state,{
                showUniting:state.fullUnits.slice(state.indexStart,state.indexEnd)
            });
        case actionTypes.SMART:
            return updateObject(state,{
                indexEnd:1
            });
        case actionTypes.TABLET:
            return updateObject(state,{
                indexEnd:2
            });
        case actionTypes.LAPTOP:
            return updateObject(state,{
                indexEnd:3
            });
        case actionTypes.LARGE:
            return updateObject(state,{
                indexEnd:6
            });
        case actionTypes.PREW:
            return updateObject(state,{
                indexEnd:getPrewEnd(state.fullUnits,state.indexEnd,state.indexStart),
                indexStart:getPrewBegin(state.fullUnits,state.indexStart)
            });
        case actionTypes.NEXT:
            return updateObject(state,{
                indexEnd:getNextEnd(state.fullUnits,state.indexEnd),
                indexStart:getNextBegin(state.fullUnits,state.indexStart,state.indexEnd)
            });
        case actionTypes.RESET:
            return updateObject(state,{
                fullUnits:[],
                showUniting:[],
                indexEnd:6,
                indexStart:0,
                keyUnit:0
            });
        case actionTypes.KEY_UNIT:
            return updateObject(state,{
                keyUnit:action.key
            })

    }
    return state;
};

export default units;