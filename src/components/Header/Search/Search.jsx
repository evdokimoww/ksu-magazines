import React from "react";
import {Field, reduxForm} from "redux-form";
import {useHistory} from "react-router-dom";

const Search = ({searchFlow}) => {
    let history = useHistory();

    const onSubmit = (values) => {
        history.push("/search-results");

        const formData = new FormData();
        formData.append('search', values.search);
        searchFlow(formData);
    }

    return <SearchReduxForm onSubmit={onSubmit}/>
}

const SearchForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <Field component={'input'}
               type={'text'}
               name={'search'}
               placeholder={'Поиск по фамилии автора'}/>
    </form>
}

const SearchReduxForm = reduxForm({form: 'search'})(SearchForm);

export default Search