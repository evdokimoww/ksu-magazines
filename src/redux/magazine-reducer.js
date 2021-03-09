import {magazineAPI} from "../api/api";
import {toggleIsFetching} from "./page-reducer";

const SET_ARCHIVE_NUMBERS = 'magazine/SET_ARCHIVE_NUMBERS'
const SET_NUMBER_DESCRIPTION = 'magazine/SET_NUMBER_DESCRIPTION'
const SET_NUMBER_SCIENCES = 'magazine/SET_NUMBER_SCIENCES'
const SET_ERROR_NUMBER_DATA = 'magazine/SET_ERROR_NUMBER_DATA'

let initialState = {
    numbers: [],
    pages: 1, //on archive numbers
    currentPage: 1, //on archive numbers
    description: '',
    sciences: [],
    errorData: false
};

const magazineReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ARCHIVE_NUMBERS:{
            return {
                ...state,
                ...action.payload,
            }
        }
        case SET_NUMBER_DESCRIPTION:{
            return {
                ...state,
                ...action.payload
            }
        }
        case SET_NUMBER_SCIENCES:{
            return {
                ...state,
                sciences: action.payload
            }
        }
        case SET_ERROR_NUMBER_DATA:{
            return {
                ...state,
                errorData: action.payload
            }
        }
        default:
            return state;
    }
}

export default magazineReducer;

export const setArchiveNumbers = (numbers, pages, currentPage) => ({
    type: SET_ARCHIVE_NUMBERS,
    payload: {numbers, pages, currentPage}
});

export const setNumberDescription = (description) => ({
    type: SET_NUMBER_DESCRIPTION,
    payload: {description}
});

export const setNumberSciences = (sciences) => ({
    type: SET_NUMBER_SCIENCES,
    payload: sciences
});

export const setErrorNumberData = (error) => ({
    type: SET_ERROR_NUMBER_DATA,
    payload: error
});

export const requestArchivePage = (page) => async (dispatch) => {
    let response = await magazineAPI.getArchive(page);
    const {current_page, number, pages} = response.data
    dispatch(setArchiveNumbers(number, pages, current_page));
}

const requestNumberData = (response, dispatch) => {
    let description = response.data[0].description
    dispatch(setErrorNumberData(false))
    dispatch(setNumberDescription(description))
    let sciences = response.data[1]
    dispatch(setNumberSciences(sciences))
}

export const requestNumber = (numberId) => async (dispatch) => {
    dispatch(setErrorNumberData(false))
    dispatch(toggleIsFetching(true))
    let response = await magazineAPI.getNumber(numberId);

    if (response.data.length !== 0) {
        requestNumberData(response, dispatch);
    } else {
        dispatch(toggleIsFetching(false))
        dispatch(setErrorNumberData(true))
    }
}

export const requestNewNumber = () => async (dispatch) => {
    let response = await magazineAPI.getNewNumber();
    requestNumberData(response, dispatch);
}

