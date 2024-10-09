import styles from "./theLandsSection.module.css"

export default function TheLandsSection({ id, animate }: { id: string; animate: boolean }) {

    return (
        <div id={id} data-animate={animate} className={`${styles.container} relative grid-center-child`}>
            
            <div className="flex flex-col">
                <div className="heading">The Lands</div>
                <div className="subheading">Transforming outdoor spaces into serene havens, our landscape designs seamlessly integrate nature and architecture. We create environments that are not only visually stunning but also sustainable and functional.</div>
            </div>
            <img className={`${styles.curve} absolute-center`} src="/brand-curve.svg" alt="" />
        </div>
    )
};
