import s from "./Result.module.css"
import {SaveBtn} from "../../components/saveBtn/SaveBtn.jsx";
import {NavLink} from "react-router-dom";
export const Result = ()=>{
    return(
        <div className={s.result}>
            <div className={s.resultContainer}>
                <img src={'https://placehold.co/244x529'} className={s.image}/>
                <SaveBtn>Save</SaveBtn>
                <NavLink to={'/'} className={s.link}>More pics</NavLink>
            </div>
        </div>
    )
}