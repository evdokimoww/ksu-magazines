import React from "react";
import s from "./MostViewedArticles.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEye} from "@fortawesome/free-solid-svg-icons"
import {useLanguage} from "../../Language/LanguageContext";

const MostViewedArticles = (props) => {
    return <div className={s.popularArticles}>
        {props.articles.map((a, index) => <Article article={a} key={index} />)}
    </div>
}

const Article = ({article}) => {
    const {header_en, header_rus, id, viewed} = article
    const {language} = useLanguage()

    return <div className={s.article}>
        <a className={s.link}
           href={`https://api-mag.kursksu.ru/api/v1/get_pdf/` + id}
           target="_blank"
           rel="noreferrer"
           dangerouslySetInnerHTML={{__html: `${!language ? header_rus : header_en}`}}/>
        <p className={s.viewedNum}><FontAwesomeIcon icon={faEye}/> {viewed}</p>
    </div>
}

export default MostViewedArticles