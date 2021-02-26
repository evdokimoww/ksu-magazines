import React from 'react'
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getTotalStatistic} from "../../redux/general-reducer";
import Footer from "./Footer";

class FooterContainer extends React.Component {
    componentDidMount() {
        this.props.getTotalStatistic();
    }

    render() {
        return <Footer allArticles={this.props.allArticles}
                       allNumbers={this.props.allNumbers}
                       averageArticles={this.props.averageArticles}/>
    }
}

let mapStateToProps = (state) => ({
    allArticles: state.app.allArticles,
    allNumbers: state.app.allNumbers,
    averageArticles: state.app.averageArticles
})

export default compose(
    withRouter,
    connect(mapStateToProps, {getTotalStatistic})
)(FooterContainer);