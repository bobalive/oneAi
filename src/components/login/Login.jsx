import s from "./Login.module.css"
import cancel from '../../assets/img/cancel.png'
import {useEffect} from "react";
import {SaveBtn} from "../saveBtn/SaveBtn.jsx";

export const Login =({isOpen , setIsOpen})=>{
    useEffect(() => {
        if(isOpen){
            document.body.style.overflow = 'hidden'
            const login = document.querySelector('.'+s.login)
            const form = document.querySelector('.'+s.form)
            login.addEventListener('click' ,(e)=>{
                setIsOpen(false);
            })
            form.addEventListener('click' ,(e)=>{
                e.stopPropagation()
            })
        }else {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen]);
    return(
        <div className={s.login + " " + (isOpen ? s.active : '')}>
            <img src={cancel} className={s.cancel} onClick={(e) => {
                e.stopPropagation()
                setIsOpen(false)
            }}/>
            <div className={s.container + " " + (isOpen ? s.active : '')}>
                <form className={s.form}>
                    <input type={'email'} className={s.input} placeholder={'Email'}/>
                    <input type={"password"} className={s.input} placeholder={'Password'}/>
                    <SaveBtn >Sign in</SaveBtn>
                </form>
            </div>
        </div>
    )
}