import React from "react";
import s from "./MostViewedArticles.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"

const MostViewedArticles = (props) => {
    return <div className={s.popularArticles}>
        {props.articles.map(a => <Article key={a.id} article={a} />)}
    </div>
}

const Article = (props) => {
    return <div className={s.article}>
        <a className={s.link}
           href={`https://api-mag.kursksu.ru/api/v1/get_pdf/` + props.article.id}
           target="_blank"
           dangerouslySetInnerHTML={{ __html: `${props.article.header_rus}` }} />
        <p className={s.viewedNum}><FontAwesomeIcon icon={faEye}/> {props.article.viewed}</p>
    </div>
}

export default MostViewedArticles