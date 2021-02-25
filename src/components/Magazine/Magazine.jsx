import React from "react";
import s from "./Magazine.module.css"
import Article from "./Article";

const Magazine = ({sciences, description}) => {
    return <div>
        <h3 className={s.magazineTitle}>{description}</h3>
        { sciences.map(s => <Science science={s}/>) }
    </div>
}

const Science = (props) => {
    return <div className={s.science}>
        <h3 className={s.scienceTitle}>{props.science.name_rus}</h3>
        { props.science.article.map(a => <Article article={a}/>) }
    </div>
}

export default Magazine;