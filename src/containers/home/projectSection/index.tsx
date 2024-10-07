import { useState } from "react"
import styles from "./projectSection.module.css"

export default function ProjectSection() {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <div className={`${styles.container} flex`}>
            <div className={`${styles.left} flex flex-col justify-between`}>
                <img src="/FloorP 1.png" alt="" />
                <div className={`${styles.tabs} flex text-center`}>
                    {["Floor Plan", "Interior", "Exterior"].map((tab, index) =>
                    (<div key={tab} data-active={activeTab == index}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab}
                    </div>))}
                </div>
            </div>
            <div className={`${styles.right} flex flex-col justify-between`}>
                <div className="heading">Project Name</div>
                <p className="subheading">
                    Transforming outdoor spaces into serene
                    havens, our landscape designs seamlessly
                    integrate nature and architecture.
                </p>
                <img src="/Mask group.png" alt="" />
                <a className={`external-link flex`} href="#">
                    Project Portfolio Link
                </a>
            </div>
        </div>
    )
};
