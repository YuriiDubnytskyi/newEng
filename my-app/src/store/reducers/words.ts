import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import {IreduceWords} from "../../interfaces/IreduceWords";

const initialState:IreduceWords = {
    fullWords:[],
    keyWords:0
};


const words = ( state:IreduceWords = initialState, action:any ) => {
    switch ( action.type ) {
        case actionTypes.GET_WORDS:
            return updateObject(state,{
                fullWords:action.dataWords
            });
        case actionTypes.KEY_WORDS:
            return updateObject(state,{
                keyWords:action.key
            })
    }
    return state;
};

export default words;