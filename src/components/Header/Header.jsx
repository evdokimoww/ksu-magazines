import React from "react";
import s from "./Header.module.css"
import SearchContainer from "./Search/SearchContainer";
import classNames from "classnames/bind";

const Header = ({domain}) => {
    return <header className={s.header}>
        <div className={s.headerWrapper}>
            <div className={s.language}></div>
            <div className={s.siteTitle}>
                <h2 className={s.mainTitle}>НАУЧНЫЙ ПОИСК МОЛОДЫХ ИССЛЕДОВАТЕЛЕЙ</h2>
                <small>Электронный научный журнал Курского государственного университета. Основан в 1941 году как печатное издание.</small>
            </div>
            <div className={s.search}>
                <SearchContainer />
            </div>
        </div>

    </header>
}

export default Header;