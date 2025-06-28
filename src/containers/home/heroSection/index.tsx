import { heroSectionData } from "../../../constants"
import styles from "./heroSection.module.css"

export default function HeroSection() {

    return (
        <div className={`${styles.container} relative flex flex-col items-center justify-center`}>
            <div className={styles.title_t}>{heroSectionData.title}</div>
            {/* <div className={styles.title}>{heroSectionData.title}</div> */}
            <div className={styles.heading}>{heroSectionData.heading}</div>
            <div className={styles.subHeading}>{heroSectionData.subHeading}</div>
        </div>
    )
};
