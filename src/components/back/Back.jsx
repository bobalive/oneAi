import {NavLink} from "react-router-dom";
import BackArrow from "../../assets/img/back_arrow_icon.svg";
import s from './Back.module.css'

export const Back = () => {
  return(
      <>
          <NavLink to={'/'} className={s.button}>
              <img src={BackArrow} className={s.icon}/>
              Go Back
          </NavLink>
      </>
  )
}