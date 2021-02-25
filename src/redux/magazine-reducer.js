import {magazineAPI} from "../api/api";

const SET_ARCHIVE_NUMBERS = 'magazine/SET_ARCHIVE_NUMBERS'
const SET_NUMBER_DESCRIPTION = 'magazine/SET_NUMBER_DESCRIPTION'
const SET_NUMBER_SCIENCES = 'magazine/SET_NUMBER_SCIENCES'

let initialState = {
    numbers: [],
    description: '',
    sciences: []
};

const magazineReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ARCHIVE_NUMBERS:{
            return {
                ...state,
                numbers: action.payload
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
        default:
            return state;
    }
}

export default magazineReducer;

export const setArchiveNumbers = (numbers) => ({
    type: SET_ARCHIVE_NUMBERS,
    payload: numbers
});

export const setNumberDescription = (description) => ({
    type: SET_NUMBER_DESCRIPTION,
    payload: {description}
});

export const setNumberSciences = (sciences) => ({
    type: SET_NUMBER_SCIENCES,
    payload: sciences
});

export const requestArchive = () => async (dispatch) => {
    let response = await magazineAPI.getArchive();
    dispatch(setArchiveNumbers(response.data.number));
}

const requestNumberData = (response, dispatch) => {
    let description = response.data[0].description;
    dispatch(setNumberDescription(description));
    let sciences = response.data[1]
    dispatch(setNumberSciences(sciences));
}

export const requestNumber = (numberId) => async (dispatch) => {
    let response = await magazineAPI.getNumber(numberId);
    requestNumberData(response, dispatch);
}

export const requestNewNumber = () => async (dispatch) => {
    let response = await magazineAPI.getNewNumber();
    requestNumberData(response, dispatch);
}

