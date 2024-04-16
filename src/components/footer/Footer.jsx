import s from './Footer.module.css'

export const Footer = () => {
  return(
      <div className={s.footer}>
          <div className={s.info}>
              <span className={s.support}>Get help at support@avgen.me</span>
              <p className={s.text}>Copyright © 2024 Mook Ltd. All rights reserved.</p>
          </div>
      </div>
  )
}