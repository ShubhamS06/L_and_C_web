import { CardData } from "../../constants"
import styles from "./imageCard.module.css"

export default function ImageCard({ title, text, link, imageUrl }: CardData) {

    return (
        <div className={`${styles.card} flex overflow-hidden relative`}>
            <img className="absolute-center" src={imageUrl} alt="" />
            <div className={`${styles.content} w-full mt-auto flex flex-col justify-center overflow-hidden`}>
                <div className="heading">{title}</div>
                <div className="subheading">{text}</div>
            </div>

            <a className={`${styles.linkIcon}`} href={link}>
                <img src="/icons/Arrow 1.svg" />
            </a>
        </div>
    )
};
