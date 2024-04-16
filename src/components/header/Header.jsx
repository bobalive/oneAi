import s from './Header.module.css'

export const Header = ({setIsOpen}) => {
    return(
        <div className={s.header}>
            <h2 className={s.title}>OneAi</h2>
            <span className={s.button} onClick={()=> {
                setIsOpen(true)
            }
            }>Sign in</span>
        </div>
    )
}