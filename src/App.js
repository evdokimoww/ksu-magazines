import './App.css';
import React, {Suspense} from "react";
import Header from "./components/Header/Header";
import {Route, Switch} from "react-router-dom";
import {Redirect} from "react-router";

import FooterContainer from "./components/Footer/FooterContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import classNames from "classnames"
import {LanguageProvider} from "./components/Language/LanguageContext";
import NotFoundPage from "./components/Pages/NotFoundPage";

const PageContainer = React.lazy(() => import('./components/Pages/PageContainer'));
const SearchPage = React.lazy(() => import('./components/Header/Search/SearchPage'));
const ArchiveContainer = React.lazy(() => import('./components/Archive/ArchiveContainer'));
const MagazineContainer = React.lazy(() => import('./components/Magazine/MagazineContainer'));
const NewNumberContainer = React.lazy(() => import('./components/Magazine/NewNumber/NewNumberContainer'));


function App () {
    let domain = window.location.hostname
    // const mainStyle = classNames({
    //     'appWrapper': true,
    //     'scientificSearch': domain === ('localhost'),
    //     // 'scientificSearch': domain === ('https://scientific-search.kursksu.ru/'),
    //     'tlIc': domain === ('https://tl-ic.kursksu.ru/'),
    //     'scientificNotes': domain === ('https://scientific-notes.ru/'),
    //     'ipp': domain === ('https://ipp.kursksu.ru/'),
    //     'economPrav': domain === ('https://economprav.ru/'),
    //     'auditorium': domain === ('https://auditorium.kursksu.ru/')
    // })

    return (
        <LanguageProvider>
            <div className="appWrapper scientificSearch">
                <Header/>
                <div className="appWrapperContent">
                    <Sidebar domain={domain}/>
                    <div className="pageContent">
                        <Suspense fallback={<div>Загрузка данных...</div>}>
                            <Switch>
                                <Route path='/search-results' render={() => <SearchPage/>}/>
                                <Route path='/magazine/archive/:page' render={() => <ArchiveContainer/>}/>
                                <Route path='/magazine/:numberId' render={() => <MagazineContainer/>}/>
                                <Route path='/magazine/new-number' render={() => <NewNumberContainer/>}/>
                                <Route path='/404' render={() => <NotFoundPage />}/>
                                <Route path='/:pageName' render={() => <PageContainer/>}/>
                                <Route path='*' render={() => <Redirect to="/index" />}/>
                            </Switch>
                        </Suspense>
                    </div>
                </div>
                <FooterContainer/>
            </div>
        </LanguageProvider>
    );
}

export default App;
