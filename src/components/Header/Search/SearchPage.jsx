import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Article from "../../Magazine/Article";
import s from "../../Index/Page.module.css";

class SearchPage extends React.Component{
    render() {
            return (
                <div className={s.indexContent}>
                    <h1>Результаты поиска:</h1>
                    { this.props.searchResult.length > 0
                        ? this.props.searchResult.map(a => <Article article={a}/>)
                        : <div>Поиск не дал результатов</div>
                    }
                </div>
                    );
    }
}

let mapStateToProps = (state) => {
    return {
        searchResult: state.app.searchResult
    }
}

export default compose(
    connect(mapStateToProps, {}),
    withRouter
)(SearchPage);


function sumT(a, b) {
    return a + b;
}

const sumTFive = function(v) {
    return sumT(5 + v)
}

sumTFive(10)