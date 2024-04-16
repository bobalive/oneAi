import {Header} from "../../components/header/Header.jsx";
import s from "./Home.module.css";
import {Cards} from "../../components/cards/Cards.jsx";
import {Footer} from "../../components/footer/Footer.jsx";
import {Login} from "../../components/login/Login.jsx";
import {useState} from "react";


export const Home = ()=>{
    const cards = [
        {
        name:'Lego',
        img:"",
        id:'1'
        },
        {
            name:'Lego',
            img:"",
            id:'2'
        },
        {
            name:'Lego',
            img:"",
            id:'3'
        },
    ]
    const [isOpen , setIsOpen ] = useState(false)
    return(
        <div className={s.main}>
            <Header setIsOpen = {setIsOpen}/>
            <Cards cards={cards}/>
            <Footer/>
            <Login isOpen = {isOpen}  setIsOpen = {setIsOpen}/>
        </div>
    )
}