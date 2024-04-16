import s from './UploadCard.module.css'
import {UploadTools} from "../uploadTools/UploadTools.jsx";

export const UploadCard = () => {
    return(
        <div className={s.cardContainer}>
            <div className={s.imageContainer}>
                <img className={s.image} src={'https://placehold.co/350x350'}/>
                <img src={'https://placehold.co/350x350/orange/white'} />
            </div>
            <UploadTools/>
        </div>
    )
}

