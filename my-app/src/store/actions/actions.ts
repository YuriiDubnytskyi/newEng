import * as actionTypes from './actionTypes';

type arrayBooks={ name:string, version:string, keyUnit:number }[]
type arrayUnits={ name:string, version:string, keyWords:number }[]

export const login = () => {
    return {
        type: actionTypes.LOGIN
    };
};
export const getBooks = (dataBooks:arrayBooks,id:number) => {
    return {
        type: actionTypes.GET_BOOKS,
        dataBooks:dataBooks,
        id:id
    };
};
export const showBooks = () => {
    return {
        type: actionTypes.SET_SHOW_BOOKS
    };
};
export const getUnits = (dataUnits:arrayUnits) => {
    return {
        type: actionTypes.GET_UNITS,
        dataUnits:dataUnits
    };
};
export const showUnits = () => {
    return {
        type: actionTypes.SET_SHOW_UNITS
    };
};
export const smart = () => {
    return {
        type: actionTypes.SMART
    };
};
export const tablet = () => {
    return {
        type: actionTypes.TABLET
    };
};
export const laptop = () => {
    return {
        type: actionTypes.LAPTOP
    };
};
export const large = () => {
    return {
        type: actionTypes.LARGE
    };
};
export const getWords = (dataWords:string[]) => {
    return {
        type: actionTypes.GET_WORDS,
        dataWords:dataWords
    };
};
export const prew = () => {
    return {
        type: actionTypes.PREW
    };
};
export const nexting = () => {
    return {
        type: actionTypes.NEXT
    };
};
export const reset = () => {
    return {
        type: actionTypes.RESET
    };
};
export const keyUnit = (key:number) => {
    return {
        type: actionTypes.KEY_UNIT,
        key:key
    };
};
export const keyWord = (key:number) => {
    return {
        type: actionTypes.KEY_WORDS,
        key:key
    };
};