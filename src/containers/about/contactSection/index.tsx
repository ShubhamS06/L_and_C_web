import styles from "./contactSection.module.css"

export default function ContactSection() {

    return (
        <div className={`${styles.container} relative flex justify-evenly items-center`}>
            <div className="flex flex-col">
                <div className={`${styles.title} capitalize`}>Let's design your dream space</div>
                <div className={`heading`}>Get in Touch to Craft Spaces that Inspire. </div>
            </div>
            <form action="">
                <div className={`${styles.contactCard} flex flex-col`}>
                    <label className={`${styles.label} relative flex-1 flex flex-col`}>
                        <input className={styles.input} type="text" placeholder=" " />
                        <span className="absolute-center">Name</span>
                    </label>
                    <label className={`${styles.label} relative flex-1 flex flex-col`}>
                        <input className={styles.input} type="email" placeholder=" " />
                        <span className="absolute-center">Email</span>
                    </label>
                    <label className={`${styles.label} relative flex-1 flex flex-col`}>
                        <input className={styles.input} type="tel" placeholder=" " />
                        <span className="absolute-center">Contact Number</span>
                    </label>
                    <label className={`${styles.label} relative flex-1 flex flex-col`}>
                        <input className={styles.input} type="text" placeholder=" " />
                        <span className="absolute-center">Message</span>
                    </label>

                    <button type="submit" className={styles.primaryButton}>Get in Toucn</button>
                </div>
            </form>
        </div>
    )
};
