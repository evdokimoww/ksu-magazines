import React from "react";
import {NavLink} from "react-router-dom";

const Archive = (props) => {
    return <div>
        { props.numbers.map(n => <ArchiveNumber number={n} key={n.id}/> )}
    </div>
}

const ArchiveNumber = ({number}) => {
    return  <div>
        <p>{number.description}</p>
        <NavLink to={`/magazine/archive/` + number.id}>
            <img src={'https://api-mag.kursksu.ru' + number.img}/>
        </NavLink>
    </div>
}


export default Archive;