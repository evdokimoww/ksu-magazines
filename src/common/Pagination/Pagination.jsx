import React from "react";
import s from './Pagination.module.css'
import {NavLink} from "react-router-dom";

export const Pagination = ({pages}) => {
    let numbers = [];
    for (let i = 1; i <= pages; i++) {
        numbers.push(i)
    }

    return <div>
        {
            numbers.map( n =>
                <NavLink key={n}
                         to={ `${n}` }
                         className={s.paginationLink}
                         activeClassName={s.paginationLinkActive}
                >
                    {n}
                </NavLink>
            )
        }
    </div>
}