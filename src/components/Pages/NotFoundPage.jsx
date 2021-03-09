import React from 'react'
import s from './Page.module.css'
import {NavLink} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {setErrorPageData} from "../../redux/page-reducer";

class NotFoundPage extends React.Component {
    componentDidMount() {
        this.props.setErrorPageData(false)
    }

    render() {
        const button = <NavLink to='/index'>Главной</NavLink>

        return <div className={s.indexContent}>
            <h1>Ошибка 404: Страница не найдена</h1>
            <p>Попробуйте начать с {button}</p>
        </div>
    }
}

let mapStateToProps = () => {}

export default compose(
    connect(mapStateToProps, {setErrorPageData})
)(NotFoundPage);
