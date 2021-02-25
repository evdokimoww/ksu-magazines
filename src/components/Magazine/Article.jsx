import React from "react";
import s from "./Magazine.module.css"

const Article = ({article}) => {
    return <div className={s.article}>
        <div className={s.articleTitle} dangerouslySetInnerHTML={{ __html: `${article.header_rus}` }} />
        <p className={s.articleBody}>{article.body_rus}</p>
        <a className="btn" href={`https://api-mag.kursksu.ru/api/v1/get_pdf/` + article.link}>Скачать</a>
    </div>
}

export default Article;