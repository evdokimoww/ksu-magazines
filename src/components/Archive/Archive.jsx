import React from "react";
import {NavLink} from "react-router-dom";

const Archive = (props) => {
    return <div>
        { props.numbers.map((n, index) => <ArchiveNumber number={n} key={index}/> )}
    </div>
}

const ArchiveNumber = ({number}) => {
    return <div>
        <p>{number.description}</p>
        <NavLink to={`/magazine/archive/` + number.id}>
            <img alt={number.id} src={'https://api-mag.kursksu.ru' + number.img}/>
        </NavLink>
    </div>
}


export default Archive;