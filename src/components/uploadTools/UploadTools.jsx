import {useRef} from "react";
import s from './UploadTools.module.css'
import Camera from '../../assets/img/camera.svg'
import Galery from '../../assets/img/gallery.svg'
import {NavLink} from "react-router-dom";
export const UploadTools = () => {
    return (
        <div className={s.tools}>
            <NavLink to={'/result'} className={s.tool} >
                <img src={Galery} className={s.icon}/>
                <input
                    type={'file'}
                    className={s.downloadInput}
                />
                <p className={s.text}>Choose photo from gallery</p>
            </NavLink>
            <NavLink to={'/result'} className={s.tool}>
                <img src={Camera} className={s.icon}/>
                <p className={s.text}>Take photo with camera</p>
            </NavLink>
        </div>
    );
}