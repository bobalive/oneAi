import s from "./Card.module.css"
import {NavLink} from "react-router-dom";
export const Card = ({name  , id}) => {
    return(
        <NavLink to={'/card'}  className={s.card}>
            <img src ='https://placehold.co/350x350' className={s.image}/>
            <span className={s.name}>{name}</span>
        </NavLink>
    )
}