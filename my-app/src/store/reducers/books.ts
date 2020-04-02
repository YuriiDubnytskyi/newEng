import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import {IreduceBooks} from "../../interfaces/IreduceBooks";

type arrayType={ name:string, version:string, keyUnit:number }[] |[]

const initialState:IreduceBooks = {
    id:0,
    fullBooks:[],
    showBooking:[],
    indexEnd:6,
    indexStart:0
};

const getArrayShow = (arr:arrayType,begin:number,end:number) => {
        return arr.slice(begin, end)
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

const books = ( state:IreduceBooks = initialState, action:any ) => {
    switch ( action.type ) {
        case actionTypes.GET_BOOKS:
            return updateObject(state,{
                fullBooks:action.dataBooks,
                id:action.id
            });
        case actionTypes.SET_SHOW_BOOKS:
            return updateObject(state,{
                showBooking:getArrayShow(state.fullBooks,state.indexStart,state.indexEnd)
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
                indexEnd:getPrewEnd(state.fullBooks,state.indexEnd,state.indexStart),
                indexStart:getPrewBegin(state.fullBooks,state.indexStart)
            });
        case actionTypes.NEXT:
            return updateObject(state,{
                indexEnd:getNextEnd(state.fullBooks,state.indexEnd),
                indexStart:getNextBegin(state.fullBooks,state.indexStart,state.indexEnd)
            });
    }
    return state;
};

export default books;