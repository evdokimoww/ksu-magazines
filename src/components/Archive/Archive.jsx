import React from "react";
import {NavLink} from "react-router-dom";
import {Pagination} from "../../common/Pagination/Pagination";

const Archive = ({numbers, pages, currentPage, getArchivePage}) => {
    return <div>
        {
            numbers.map((n, index) => <ArchiveNumber number={n} key={index}/> )
        }

        <Pagination pages={pages} currentPage={currentPage} getArchivePage={getArchivePage}/>
    </div>
}

const ArchiveNumber = ({number}) => {
    return <div>
            <p>{number.description}</p>
            <NavLink to={`/magazine/` + number.id}>
                <img alt={number.id} src={'https://api-mag.kursksu.ru' + number.img}/>
            </NavLink>
        </div>
}


export default Archive;