import React from "react";
import Page from "./Page";
import {connect} from "react-redux";
import {getPageData} from "../../redux/page-reducer";
import {compose} from "redux";
import {withRouter} from "react-router";
import Preloader from "../../common/Preloader/Preloader";

class PageContainer extends React.Component{
    refreshPage() {
        let page = this.props.match.params.pageName;
        if (page != 'search-page'){
            this.props.getPageData(page);
        }
    }

    componentDidMount() {
        this.refreshPage();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.pageName !== prevProps.match.params.pageName) {
            this.refreshPage();
        }
    }

    render() {
        if (this.props.isFetching) {
            return <Preloader />
        } else {
            return <Page {...this.props}
                  name={this.props.name}
                  content_rus={this.props.content_rus}
            />
        }
    }
}

let mapStateToProps = (state) => {
    return{
        name: state.page.name,
        content_rus: state.page.content_rus,
        content_en: state.page.content_en,
        isFetching: state.page.isFetching
    }
}

export default compose(
    connect(mapStateToProps, {getPageData}),
    withRouter
)(PageContainer);