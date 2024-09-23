import styles from "./experienceSection.module.css"

export default function ExperienceSection() {

    return (
        <div className={`${styles.container} flex items-center`}>
            <div className={`${styles.left} flex flex-col`}>
                <div className={styles.title}>See Our Vision Come to Life</div>
                <div className="heading">Project Name</div>
                <p className={styles.para}>
                    Mastering the Architecture, Interior &
                    Landscape Design</p>
            </div>
            <div className={`${styles.right} relative`}>
                <img className="" src="/experience-img-1.png" alt="" />
                <img width={40} className="absolute-center cursor-pointer active-press" src="/icons/play.svg" alt="" />
            </div>
        </div>
    )
};
