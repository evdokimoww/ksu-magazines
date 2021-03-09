import React from "react";
import Navbar from "./Navbar/Navbar";
import MostViewedArticlesContainer from "./MostViewedArticles/MostVievedArticlesContainer";
import s from "./Sidebar.module.css"

const Sidebar = ({domain}) => {
    return <div className={s.sidebar}>
        <Navbar domain={domain} />
        <div className={s.rars}>
            <b>ВОЗРАСТНАЯ КЛАССИФИКАЦИЯ</b>
            <p>16+</p>
            <b>ИНФОРМАЦИОННОГО ИЗДАНИЯ</b>
        </div>
        <MostViewedArticlesContainer />
    </div>
}

export default Sidebar