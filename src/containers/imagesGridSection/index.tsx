import styles from "./imagesGridSection.module.css"

export default function ImagesGridSection({ id, animate }: { id: string; animate: boolean }) {

    return (
        <div id={id} data-animate={animate} className={`${styles.container} relative flex flex-wrap`}>
            <img className={`${styles.logo} absolute-center`} src="/Group.png" alt="" />

            <div className={`${styles.block} flex justify-center items-start`}>
                <div className="relative">
                    <div className="absolute-center">
                        <h1>Lorem Ipsum</h1>
                        <p>We create stunning and functional architectural that form.</p>
                        <a href="#"><div className="external-link">View Project</div></a>
                    </div>
                    <img src="/architecture-img-1.png" alt="" />
                </div>
            </div>
            <div className={`${styles.block} flex justify-end items-end`}>
                <div className="relative">
                    <div className="absolute-center">
                        <h1>Lorem Ipsum</h1>
                        <p>We create stunning and functional architectural that form.</p>
                        <a href="#"><div className="external-link">View Project</div></a>
                    </div>
                    <img src="/architecture-img-1.png" alt="" />
                </div>
            </div>
            <div className={`${styles.block} flex justify-start items-center`}>
                <div className="relative">
                    <div className="absolute-center">
                        <h1>Lorem Ipsum</h1>
                        <p>We create stunning and functional architectural that form.</p>
                        <a href="#"><div className="external-link">View Project</div></a>
                    </div>
                    <img src="/architecture-img-1.png" alt="" />
                </div>
            </div>
            <div className={`${styles.block} flex justify-center items-end`}>
                <div className="relative">
                    <div className="absolute-center">
                        <h1>Lorem Ipsum</h1>
                        <p>We create stunning and functional architectural that form.</p>
                        <a href="#"><div className="external-link">View Project</div></a>
                    </div>
                    <img src="/architecture-img-1.png" alt="" />
                </div>
            </div>
        </div>
    )
};
