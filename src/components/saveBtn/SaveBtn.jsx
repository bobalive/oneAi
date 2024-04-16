import s from "./SaveBtn.module.css";


export const SaveBtn = ({children}) => {
    return (
        <button className={s.button}>{children}</button>
    )
}