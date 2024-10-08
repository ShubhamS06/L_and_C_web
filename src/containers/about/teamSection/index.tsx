import styles from "./teamSection.module.css"

export default function TeamSection() {

    return (
        <div className={`${styles.container} relative flex flex-col text-center`}>
            <div className={`${styles.title}`}>The Visionaries Behind the Design</div>
            <div className={`heading`}>Introducing the team that blends creativity with precision in every project</div>
            <div className={`${styles.cardGroup} flex justify-evenly`}>
                <div className={`${styles.card} relative`}>
                    <img src="/user-1.jpg" alt="" />
                    <div className={`${styles.cardContent} flex flex-col justify-center items-center absolute font-semibold`}>
                        <div className={`${styles.cardTitle} capitalize`}>
                            lorem ipsum
                        </div>
                        <div className={`${styles.cardAlt} capitalize`}>
                            Founder & Interior Designer
                        </div>
                        <div className="flex">
                            <div className={`${styles.cardSocial} flex items-center justify-center`}>
                                <img src="/icons/behance.svg" alt="" />
                            </div>
                            <div className={`${styles.cardSocial} flex items-center justify-center`}>
                                <img src="/icons/linkedin.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.card} relative`}>
                    <img src="/user-1.jpg" alt="" />
                    <div className={`${styles.cardContent} flex flex-col justify-center items-center absolute font-semibold`}>
                        <div className={`${styles.cardTitle} capitalize`}>
                            lorem ipsum
                        </div>
                        <div className={`${styles.cardAlt} capitalize`}>
                            Founder & Interior Designer
                        </div>
                        <div className="flex">
                            <div className={`${styles.cardSocial} flex items-center justify-center`}>
                                <img src="/icons/behance.svg" alt="" />
                            </div>
                            <div className={`${styles.cardSocial} flex items-center justify-center`}>
                                <img src="/icons/linkedin.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
