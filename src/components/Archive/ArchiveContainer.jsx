import React from "react";
import Archive from "./Archive";
import {connect} from "react-redux";
import {requestArchive} from "../../redux/magazine-reducer";
import {getArchiveNumbers} from "../../redux/magazine-selectors";
import {withRouter} from "react-router";
import {compose} from "redux";


class ArchiveContainer extends React.Component {

    componentDidMount() {
        this.props.requestArchive();
    }

    render() {
        return <Archive {...this.props}
                        numbers={this.props.numbers}/>
    }
}

let mapStateToProps = (state) => {
    return{
        numbers: getArchiveNumbers(state)
    }
}

export default compose(
    connect(mapStateToProps, {requestArchive}),
    withRouter
)(ArchiveContainer)