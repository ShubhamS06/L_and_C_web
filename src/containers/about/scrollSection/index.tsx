import styles from "./scrollSection.module.css"

export default function ScrollSection({ id, animate }: { id: string; animate: boolean }) {

    return (
        <div id={id} data-animate={animate} className={`${styles.container} relative grid-center-child`}>
            <div className="flex flex-col">
                <div className="subheading">Lines N Curves is a design atelier that seamlessly integrates
                    architecture, landscape, and interior design. We craft spaces
                    that are not just aesthetically pleasing but also functional and
                    sustainable, reflecting the unique essence</div>
                <a className={`external-link flex`} href="#">
                    Scroll
                </a>
            </div>
            <img className={`${styles.curve} absolute-center`} src="/brand-curve.svg" alt="" />
        </div>
    )
};
