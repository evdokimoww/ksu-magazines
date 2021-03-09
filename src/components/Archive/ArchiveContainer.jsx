import React from "react";
import Archive from "./Archive";
import {connect} from "react-redux";
import {requestArchivePage} from "../../redux/magazine-reducer";
import {getArchiveNumbers} from "../../redux/magazine-selectors";
import {withRouter} from "react-router";
import {compose} from "redux";


class ArchiveContainer extends React.Component {
    refreshArchive() {
        let page = this.props.match.params.page;
        this.props.requestArchivePage(page)
    }

    componentDidMount() {
        this.refreshArchive()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.page !== prevProps.match.params.page) {
            this.refreshArchive()
        }
    }

    render() {
        return <>
            <Archive
                {...this.props}
                numbers={this.props.numbers}
                pages={this.props.pages}
                getArchivePage={this.props.getArchivePage}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return{
        numbers: getArchiveNumbers(state),
        pages: state.magazinePage.pages,
    }
}

export default compose(
    connect(mapStateToProps, {requestArchivePage}),
    withRouter
)(ArchiveContainer)