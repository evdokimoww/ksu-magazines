import React from 'react'
import s from './Page.module.css'

const Page = ({name, content_rus}) => {

    return <div className={s.indexContent}>
        <h1>{name}</h1>
        <div dangerouslySetInnerHTML={{ __html: `${content_rus}` }} />
    </div>
}

export default Page