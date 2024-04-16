import { Back } from "../../components/back/Back.jsx";
import s from'./Upload.module.css'
import { UploadCard } from "../../components/uploadCard/UploadCard.jsx";
import  { forwardRef } from "react";

export const Upload = forwardRef((props, ref) => {
    return (
        <div ref={ref} className={s.upload}>
            <div className={s.container}>
                <Back/>
                <UploadCard/>
            </div>
        </div>
    );
});

