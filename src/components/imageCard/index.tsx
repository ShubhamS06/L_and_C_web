import { CardData } from "../../constants"
import styles from "./imageCard.module.css"
import { NavLink } from "react-router-dom"

export default function ImageCard({ title, text, link, imageUrl }: CardData) {

    return (
        <NavLink to={link} className={"d-contents route"}>
            <div className={`${styles.card} flex overflow-hidden relative`}>
                <img className="absolute-center" src={imageUrl} alt="" />
                <div className={`${styles.content} w-full mt-auto flex flex-col justify-center overflow-hidden`}>
                    <div className="heading m-0">{title}</div>
                    <div className="subheading">{text}</div>
                </div>
                <img className={`${styles.linkIcon}`} src="/icons/Arrow 1.svg" />
            </div>
        </NavLink>
    )
};
