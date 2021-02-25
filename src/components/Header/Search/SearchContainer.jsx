import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Search from "./Search";
import {searchFlow} from "../../../redux/general-reducer";

class SearchContainer extends React.Component{
    render() {
        return (
            <Search searchFlow={this.props.searchFlow}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
    }
}

export default compose(
    connect(mapStateToProps, {searchFlow}),
)(SearchContainer);