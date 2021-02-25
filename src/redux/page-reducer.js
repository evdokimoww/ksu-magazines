import {pageAPI} from "../api/api";

const SET_PAGE_DATA = 'page/SET_PAGE_DATA'
const TOGGLE_IS_FETCHING = 'page/TOGGLE_IS_FETCHING'



let initialState = {
    name: '',
    content_rus: '',
    content_en: '',
    isFetching: true
};

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGE_DATA:{
            return {
                ...state,
                ...action.payload
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.payload
            }
        }
        default:
            return state;
    }
}

export default pageReducer;

export const setPageData = (name, content_rus, content_en) => ({
    type: SET_PAGE_DATA,
    payload: {name, content_rus, content_en}
});

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    payload: isFetching
});

export const getPageData = (page) => async (dispatch) => {
    dispatch(toggleIsFetching(true));

    let response = await pageAPI.getData(page);
    let {name, content_rus, content_en} = response.data.page[0];
    dispatch(toggleIsFetching(false));
    dispatch(setPageData(name, content_rus, content_en));
}