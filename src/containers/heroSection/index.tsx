import { heroSectionData } from "../../constants"
import styles from "./heroSection.module.css"

export default function HeroSection({ id, animate }: { id: string; animate: boolean }) {

    return (
        <div id={id} data-animate={animate} className={`${styles.container} flex flex-col items-center justify-center`}>
            <div className={styles.title}>{heroSectionData.title}</div>
            <div className={styles.heading}>{heroSectionData.heading}</div>
            <div className={styles.subHeading}>{heroSectionData.subHeading}</div>
        </div>
    )
};
