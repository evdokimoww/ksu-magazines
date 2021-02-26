import React from "react";
import s from "./Magazine.module.css"
import Article from "./Article";
import {useLanguage} from "../Language/LanguageContext";

const Magazine = ({sciences, description}) => {
    return <div>
        <h3 className={s.magazineTitle}>{description}</h3>
        { sciences.map((s, index) => <Science science={s} key={index}/>) }
    </div>
}

const Science = ({science}) => {
    const {language} = useLanguage()
    const {name_rus, name_en} = science
    return <div className={s.science}>
        <h3 className={s.scienceTitle}>{!language ? name_rus : name_en}</h3>
        { science.article.map((a, index) => <Article article={a} key={index}/>) }
    </div>
}

export default Magazine;