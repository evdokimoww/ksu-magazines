import React from "react";
import s from "./Navbar.module.css"
import MenuLink from "./MenuLink";

const Navbar = ({domain}) => {
    return <nav className={s.navbar}>
        <h5>Меню</h5>
        <MenuLink link={'/index'} name={'Главная'}/>
        <MenuLink link={'/magazine/new-number'} name={'Новый выпуск'}/>
        <MenuLink link={'/magazine/archive/1'} name={'Архив номеров'}/>
        <MenuLink link={'/author'} name={'Для автора'}/>

        { domain !== 'https://economprav.ru' &&
        <MenuLink link={'/redaction'} name={'Редакция и рецензенты'}/>
        }

        { domain === 'https://scientific-notes.ru/' &&
        <MenuLink link={'/geo'} name={'География авторов'}/>
        }

        { domain === 'https://ipp.kursksu.ru/' &&
        <MenuLink link={'/retraction'} name={'Ретракция'}/>
        }

        <MenuLink link={'/contacts'} name={'Контакты'}/>
    </nav>
}

export default Navbar;