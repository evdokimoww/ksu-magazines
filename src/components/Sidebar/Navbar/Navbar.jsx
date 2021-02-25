import React from "react";
import s from "./Navbar.module.css"
import MenuLink from "./MenuLink";

const Navbar = () => {
    return <nav className={s.navbar}>
        <h5>Меню</h5>
        <MenuLink link={'/index'} name={'Главная'}/>
        <MenuLink link={'/magazine/new-number'} name={'Новый выпуск'}/>
        <MenuLink link={'/magazine/archive'} name={'Архив номеров'}/>
        <MenuLink link={'/author'} name={'Автор'}/>
    </nav>
}

export default Navbar;