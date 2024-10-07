import styles from "./reflectionsSection.module.css"

export default function ReflectionsSection() {

    return (
        <div className={`${styles.container} flex flex-col items-center`}>
            <div className={`${styles.header} text-center flex flex-col`}>
                <div className={styles.title}>Client Reflections</div>
                <div className="heading">Discover how we transform spaces and lives through their stories.</div>
            </div>
            <div className="stack w-full items-center">
                <div className="me-auto">
                    <img src="/reflectionsSection-img.png" alt="" />
                </div>
                <div className={`${styles.card} relative flex flex-col ms-auto`}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore, incididunt ut lab ncididunt ut labore.</p>
                    <div>Lorem Ipsum</div>
                </div>
            </div>
        </div>
    )
};
