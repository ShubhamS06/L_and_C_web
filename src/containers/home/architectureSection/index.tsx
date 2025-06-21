import { useEffect, useRef, useState } from "react"
import { debounce } from "utiljs-pro"
import styles from "./architectureSection.module.css"

const scrollToElement = debounce((el: HTMLElement) => el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" }), 50)

export default function ArchitectureSection() {
    const [activeTab, setActiveTab] = useState(0)
    const divRef = useRef<HTMLDivElement>(null)
    const lastActiveTab = useRef(0)

    useEffect(() => {
        if (lastActiveTab.current == activeTab) { return }

        lastActiveTab.current = activeTab

        if (divRef.current?.children?.[activeTab] instanceof HTMLElement)
            scrollToElement(divRef.current.children[activeTab])
    }, [activeTab])

    return (
        <div className={`${styles.container} flex flex-col`}>
            <div className="flex justify-between flex-wrap">
                <div className={`${styles.top} flex flex-col justify-between`}>
                    <div className="heading text-left m-0">Architecture Design</div>
                    <p className="subheading text-left">
                        Transforming outdoor spaces into serene havens, our landscape designs seamlessly integrate nature and architecture. We create environments
                    </p>
                    <a className={`external-link flex`} href="/portfolio">
                        View Projects
                    </a>
                </div>
                <div className={`${styles.tabs} flex flex-col`}>
                    {["Interior", "Landscape", "Architecture", ].map((tab, index) =>
                    (<div key={tab} data-active={activeTab == index}
                        onClick={() => setActiveTab(index)}
                        style={{color: activeTab == index ? "#F2F2F2" : "#CF7B60"}}
                    >
                        {tab}
                    </div>))}
                </div>
            </div>
            <div className={`${styles.bottom} ms-auto flex justify-between items-end`}>
                <div className="flex">
                    <img
                        className="cursor-pointer active-press"
                        data-disabled={activeTab <= 0}
                        onClick={() => activeTab > 0 && setActiveTab(activeTab - 1)}
                        width={61} src="/icons/Arrow 2.svg" alt="Arrow left" />
                    <img
                        className="cursor-pointer active-press"
                        data-disabled={activeTab >= 3}
                        onClick={() => activeTab < 3 && setActiveTab(activeTab + 1)}
                        width={61} src="/icons/Arrow 1.svg" alt="Arrow right" />
                </div>
                <div className="flex" ref={divRef}>
                    <img className={`${styles.Architecture_Design_images}`} src="/architecture-img-1.png" alt="" />
                    <img className={`${styles.Architecture_Design_images}`} src="/architecture-img-2.png" alt="" />
                    <img className={`${styles.Architecture_Design_images}`} src="/architecture-img-1.png" alt="" />
                    <img className={`${styles.Architecture_Design_images}`} src="/architecture-img-2.png" alt="" />
                </div>
            </div>
        </div>
    )
};
