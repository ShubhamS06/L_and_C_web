import styles from "./theArcSection.module.css"

export default function TheArcSection({ id, animate }: { id: string; animate: boolean }) {

    return (
        <div id={id} data-animate={animate} className={`${styles.container} relative flex items-center justify-end`}>
            <span className="absolute-center"></span>
            <div className="flex flex-col">
                <div className="heading">The Arch</div>
                <div className="subheading">Our architectural designs are a harmonious blend of form, function, and aesthetics, creating iconic spaces that stand the test of time. We believe that every building tells a story, and our expertise lies in crafting narratives through design.</div>
            </div>
            <img className={`${styles.curve} absolute-center`} src="/brand-curve.svg" alt="" />
        </div>
    )
};
