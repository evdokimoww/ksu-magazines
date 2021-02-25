import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const MenuLink = ({link, name}) => {
    return <div className={s.item}>
        <NavLink exact to={link} className={s.menuLink} activeClassName={s.activeLink}>{name}</NavLink>
    </div>
}

export default MenuLink;