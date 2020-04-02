import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import {IreduceLogin} from "../../interfaces/IreduceLogin";

const initialState:IreduceLogin = {
    isAutofication:false
};


const login = ( state:IreduceLogin = initialState, action:any ) => {
    switch ( action.type ) {
        case actionTypes.LOGIN:
            return updateObject(state, {
                isAutofication:true
            });

    }
    return state;
};

export default login;