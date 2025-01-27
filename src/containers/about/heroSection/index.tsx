import styles from "./heroSection.module.css"

export default function HeroSection() {

    return (
        <div className={`${styles.container} relative flex flex-col items-start justify-end`}>
            <div className={`${styles.heading} heading w-fit m-0`}>Lines N Curves</div>
            <div className={`${styles.subHeading} subheading`}>Lines N Curves is a design atelier that seamlessly integrates architecture, landscape, and interior design. We craft spaces that are not just aesthetically pleasing but also functional and sustainable, reflecting the unique essence </div>
        </div>
    )
};
