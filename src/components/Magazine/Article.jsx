import React from "react";
import s from "./Magazine.module.css"
import {useLanguage} from "../Language/LanguageContext";

const Article = ({article}) => {
    const {language} = useLanguage()
    const {body_en, body_rus, downloads, header_en, header_rus, link} = article

    return <div className={s.article}>
        <div className={s.articleTitle}
             dangerouslySetInnerHTML={{ __html: `${!language ? header_rus : header_en}` }} />
        <p className={s.articleBody}>{!language ? body_rus : body_en}</p>
        <a className="btn" href={`https://api-mag.kursksu.ru/api/v1/get_pdf/` + link}>Скачать</a>
        <span className={s.downloaded} >Количество скачиваний: {downloads}</span>
    </div>
}

export default Article;