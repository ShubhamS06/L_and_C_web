import styles from "./designSection.module.css"

export default function DesignSection() {

    return (
        <div className={`${styles.container} flex flex-col justify-center mx-auto`}>
            <div className="stack items-center text-center">
                <img className="stack-bg" src="/designSection-bg.png" alt="" />
                <div className="heading">Let's Design your Dream.</div>
            </div>
            <div className={`${styles.bottom} flex justify-between`}>
                <img src="/Group.png" alt="" />
                <div>
                    <p className={`${styles.para} font-normal`}>Transforming outdoor spaces into serene havens, our landscape designs seamlessly integrate nature and architecture. We create environments that are not only visually stunning but also sustainable and functional.</p>
                    <a className={`${styles.link} flex`} href="#">
                        <span>Who we are</span>
                        <img width={20} src="/icons/arrow-top-right.svg" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
};
