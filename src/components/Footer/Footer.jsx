import React from 'react'
import s from './Footer.module.css'

const Footer = ({allArticles, allNumbers, averageArticles}) => {

    return <footer className={s.footer}>
        <div>
            Количество выпусков: <b>{allNumbers}</b>
        </div>
        <div>
            Общее количество статей: <b>{allArticles}</b>
        </div>
        <div>
            Среднее количество статей в выпуске: <b>{averageArticles}</b>
        </div>
    </footer>
}

export default Footer;