import React from 'react'
import s from './Page.module.css'
import {useLanguage} from "../Language/LanguageContext";

const Page = ({name, content_rus, content_en}) => {
    const {language} = useLanguage()

    return <div className={s.indexContent}>
        <h1>{name}</h1>
        <div dangerouslySetInnerHTML={{ __html: `${!language ? content_rus : content_en}` }} />
    </div>
}

export default Page