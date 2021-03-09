import {generalAPI, searchAPI} from "../api/api";
import {reset} from 'redux-form';

const SET_TOTAL_STATISTIC = 'general/SET_TOTAL_STATISTIC'
const SET_MOST_VIEWED_ARTICLES = 'general/SET_MOST_VIEWED_ARTICLES'
const SET_SEARCH_RESULT = 'general/SET_SEARCH_RESULT'

let initialState = {
    allArticles: null,
    allNumbers: null,
    averageArticles: null,
    mostViewedArticles: [],
    searchResult: []
};

const generalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOTAL_STATISTIC: {
            return {
                ...state,
                ...action.payload
            }
        }
        case SET_MOST_VIEWED_ARTICLES: {
            return {
                ...state,
                mostViewedArticles: action.payload
            }
        }
        case SET_SEARCH_RESULT: {
            return {
                ...state,
                searchResult: action.payload
            }
        }
        default:
            return state;
    }
}

export default generalReducer;

export const setTotalStatistic = (allArticles, allNumbers, averageArticles) => ({
    type: SET_TOTAL_STATISTIC,
    payload: {allArticles, allNumbers, averageArticles}
})

export const setMostViewedArticles = (mostViewedArticles) => ({
    type: SET_MOST_VIEWED_ARTICLES,
    payload: mostViewedArticles
})

export const setSearchResults = (searchResult) => ({
    type: SET_SEARCH_RESULT,
    payload: searchResult
})

export const getTotalStatistic = () => async (dispatch) => {
    let response = await generalAPI.getTotalStatistic();
    let {all_articles, all_numbers, average_articles} = response.data;
    dispatch(setTotalStatistic(all_articles, all_numbers, average_articles));
}

export const getMostViewedArticles = () => async (dispatch) => {
    let response = await generalAPI.getMostViewedArticles();
    dispatch(setMostViewedArticles(response.data));
}

export const searchFlow = (value) => async (dispatch) => {
    let response = await searchAPI.searchAuthor(value);
    if (response.data.result) {
        dispatch(setSearchResults(response.data.result));
        dispatch(reset('search'))
    }
}