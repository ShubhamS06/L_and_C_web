import styles from "./experienceSection.module.css"

export default function ExperienceSection() {

    return (
        <div className={`${styles.container} flex items-center`}>
            <div className={`${styles.left} flex flex-col`}>
                <div className={`${styles.title} text-left-sm`}>See Our Vision Come to Life</div>
                <div className="heading text-left-sm">Experience the Transformation</div>
                <p className={styles.para}>
                    Mastering the Architecture, Interior &
                    Landscape Design</p>
            </div>
            <div className="flex-1 relative">
                <img className={styles.rightBg} src="/experience-img-1.png" alt="" />
                <img width={40} className="absolute-center cursor-pointer active-press" src="/icons/play.svg" alt="" />
            </div>
        </div>
    )
};
