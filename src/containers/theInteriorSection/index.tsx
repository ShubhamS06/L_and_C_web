import styles from "./theInteriorSection.module.css"

export default function TheInteriorSection({ id, animate }: { id: string; animate: boolean }) {

    return (
        <div id={id} data-animate={animate} className={`${styles.container} relative flex items-center justify-end`}>
            <span className="absolute-center"></span>
            <div className="flex flex-col">
                <div className="heading">The Interior</div>
                <div className="subheading">We create personalized interiors that reflect our clients' unique styles and personalities. Our designs are a perfect balance of aesthetics, functionality, and comfort, transforming houses into homes.</div>
            </div>
            <img className={`${styles.curve} absolute-center`} src="/brand-curve.svg" alt="" />
        </div>
    )
};
