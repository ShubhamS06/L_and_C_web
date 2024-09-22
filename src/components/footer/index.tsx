import styles from "./footer.module.css"

export default function Footer() {

    return (
        <div className={`${styles.footer}`}>
            <div className={`${styles.top} flex items-start justify-between`}>
                <div className="flex flex-col">
                    <div>
                        <img src="/brand-logo.png" className={`${styles.brandImg}`} />
                        <p className={styles.tagline}>Masterful design for interiors, architecture, and landscapes.</p>
                    </div>
                    <div className={`${styles.socials} flex items-center`}>
                        <img width={40} src="/icons/Whatsapp.svg" alt="" />
                        <img width={40} src="/icons/Instagram.png" alt="" />
                        <img width={40} src="/icons/Facebook.png" alt="" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className={styles.title}>Contact Details</div>
                    <div className={`${styles.block} flex items-center`}>
                        <img width={40} src="/icons/Email.png" alt="" />
                        <div>
                            <div>Email</div>
                            <div>linesncurve@gmail.com</div>
                        </div>
                    </div>
                    <div className={`${styles.block} flex items-center`}>
                        <img width={40} src="/icons/Phone.png" alt="" />
                        <div>
                            <div>Contact</div>
                            <div>+91 8788464468</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className={styles.title}>Quick links</div>
                    <div>
                        <div className={styles.link}>Services</div>
                        <div className={styles.link}>Portfolio</div>
                        <div className={styles.link}>Contact Us</div>
                        <div className={styles.link}>About Us</div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className={styles.map}>
                        <img src="/footer-map.png" alt="" />
                    </div>
                    <div>
                        <div className={`${styles.buttonPrimary} flex items-center justify-center`}>Get Direction
                            <img width={20} src="/icons/arrow-right.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.hr} data-is="hr"></div>
            <div className={`${styles.bottom} text-center`}>
                Copyright &copy; 2024 All Right Reserved
            </div>
        </div>
    )
};
