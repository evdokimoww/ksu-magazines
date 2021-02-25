import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import MostViewedArticles from "./MostViewedArticles";
import {getMostViewedArticles} from "../../../redux/general-reducer";

class MostViewedArticlesContainer extends React.Component {
    componentDidMount() {
        this.props.getMostViewedArticles();
    }

    render() {
        return <MostViewedArticles articles={this.props.mostViewedArticles}/>
    }
}

let mapStateToProps = (state) => {
    return{
        mostViewedArticles: state.app.mostViewedArticles
    }
}

export default compose(
    connect(mapStateToProps, {getMostViewedArticles})
)(MostViewedArticlesContainer)
