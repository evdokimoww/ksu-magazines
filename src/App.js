import './App.css';
import React, {Suspense} from "react";
import Header from "./components/Header/Header";
import {Route, Switch} from "react-router-dom";
import FooterContainer from "./components/Footer/FooterContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import classNames from "classnames"
import {LanguageProvider} from "./components/Language/LanguageContext";

const PageContainer = React.lazy(() => import('./components/Pages/PageContainer'));
const SearchPage = React.lazy(() => import('./components/Header/Search/SearchPage'));
const ArchiveContainer = React.lazy(() => import('./components/Archive/ArchiveContainer'));
const MagazineContainer = React.lazy(() => import('./components/Magazine/MagazineContainer'));
const NewNumberContainer = React.lazy(() => import('./components/Magazine/NewNumber/NewNumberContainer'));


function App () {
    let domain = window.location.hostname
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
        <LanguageProvider>
            <div className={mainStyle}>
                <Header/>
                <div className="appWrapperContent">
                    <Sidebar/>
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
        </LanguageProvider>
    );
}

export default App;
