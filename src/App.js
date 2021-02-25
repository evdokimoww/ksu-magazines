import './App.css';
import React, {Suspense} from "react";
import Header from "./components/Header/Header";
import {Route, Switch} from "react-router-dom";
import FooterContainer from "./components/Footer/FooterContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import classNames from "classnames"
import {setDomainName} from "./redux/general-reducer";
import {compose} from "redux";
import {connect} from "react-redux";

const PageContainer = React.lazy(() => import('./components/Index/PageContainer'));
const SearchPage = React.lazy(() => import('./components/Header/Search/SearchPage'));
const ArchiveContainer = React.lazy(() => import('./components/Archive/ArchiveContainer'));
const MagazineContainer = React.lazy(() => import('./components/Magazine/MagazineContainer'));
const NewNumberContainer = React.lazy(() => import('./components/Magazine/NewNumber/NewNumberContainer'));


class App extends React.Component {
    render() {
        const domain = window.location.hostname;
        this.props.setDomainName(domain);

        const mainStyle = classNames({
            'appWrapper': true,
            'scientificSearch': domain === ('localhost'),
            // 'scientificSearch': domain === ('https://scientific-search.kursksu.ru/'),
            'tlIc': domain === ('https://tl-ic.kursksu.ru/'),
            'scientificNotes': domain === ('http://scientific-notes.ru/'),
            'ipp': domain === ('https://ipp.kursksu.ru/'),
            'economPrav': domain === ('https://economprav.ru/'),
            'auditorium': domain === ('https://auditorium.kursksu.ru/')
        })

        return (
            <div className={mainStyle}>
                <Header domain={this.props.domain}/>
                <div className="appWrapperContent">
                    <Sidebar />
                    <div className="pageContent">
                        <Suspense fallback={<div>Загрузка данных...</div>}>
                            <Switch>
                                <Route path='/search-results' render={() => <SearchPage/>}/>
                                <Route exact path='/magazine/archive' render={() => <ArchiveContainer/>}/>
                                <Route path='/magazine/archive/:numberId' render={() => <MagazineContainer/>}/>
                                <Route path='/magazine/new-number' render={() => <NewNumberContainer/>}/>
                                <Route path='/:pageName' render={() => <PageContainer/>}/>
                            </Switch>
                        </Suspense>
                    </div>
                </div>

                <FooterContainer/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        domain: state.app.domain
    }
}

export default compose(
    connect(mapStateToProps, {setDomainName})
)(App);
