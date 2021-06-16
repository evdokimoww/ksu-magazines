import React from "react";
import {connect} from "react-redux";
import {requestNumber} from "../../redux/magazine-reducer";
import {compose} from "redux";
import {withRouter, Redirect} from "react-router";
import Magazine from "./Magazine";
import Preloader from "../../common/Preloader/Preloader";

class MagazineContainer extends React.Component {
    refreshNumber() {
        let numberId = this.props.match.params.numberId;
        this.props.requestNumber(numberId);
    }

    componentDidMount() {
        this.refreshNumber();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.numberId !== prevProps.match.params.numberId) {
            this.refreshNumber();
        }
    }

    render() {
        if (this.props.isFetching) { return <Preloader /> }
        if (this.props.errorData) { return <Redirect to="/404" /> }

        return <Magazine sciences={this.props.sciences}
                         description={this.props.description}/>
    }
}

let mapStateToProps = (state) => {
    return{
        sciences: state.magazinePage.sciences,
        description: state.magazinePage.description,
        errorData: state.magazinePage.errorData
    }
}

export default compose(
    connect(mapStateToProps, {requestNumber}),
    withRouter
)(MagazineContainer)
