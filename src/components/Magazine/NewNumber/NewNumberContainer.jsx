import React from "react";
import {connect} from "react-redux";
import {requestNewNumber} from "../../../redux/magazine-reducer";
import {compose} from "redux";
import {withRouter} from "react-router";
import Magazine from "../Magazine";

class NewNumberContainer extends React.Component {

    componentDidMount() {
        this.props.requestNewNumber();
    }

    render() {
        return <Magazine sciences={this.props.sciences}
                         description={this.props.description}/>
    }
}

let mapStateToProps = (state) => {
    return{
        sciences: state.magazinePage.sciences,
        description: state.magazinePage.description
    }
}

export default compose(
    connect(mapStateToProps, {requestNewNumber}),
    withRouter
)(NewNumberContainer)
