import { useEffect, useRef, useState } from "react"
import { debounce } from "utiljs-pro"
import styles from "./architectureSection.module.css"

const scrollToElement = debounce((el: HTMLElement) => el.scrollIntoView({ behavior: "smooth", inline: "center" }), 50)

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
                    <div className="heading">Architecture Design</div>
                    <p className="subheading">
                        Transforming outdoor spaces into serene havens, our landscape designs seamlessly integrate nature and architecture. We create environments
                    </p>
                    <a className={`external-link flex`} href="#">
                        View Projects
                    </a>
                </div>
                <div className={`${styles.tabs} flex flex-col`}>
                    {["Architecture", "Landscape", "Interior"].map((tab, index) =>
                    (<div data-active={activeTab == index}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab}
                    </div>))}
                </div>
            </div>
            <div className={`${styles.bottom} ms-auto flex justify-between items-end`}>
                <div className="flex">
                    <img
                        onClick={() => activeTab > 0 && setActiveTab(activeTab - 1)}
                        width={30} src="/icons/Arrow 2.svg" alt="" />
                    <img
                        onClick={() => activeTab < 2 && setActiveTab(activeTab + 1)}
                        width={30} src="/icons/Arrow 1.svg" alt="" />
                </div>
                <div className="flex" ref={divRef}>
                    <img width={200} src="/architecture-img-1.png" alt="" />
                    <img width={200} src="/architecture-img-2.png" alt="" />
                    <img width={200} src="/architecture-img-1.png" alt="" />
                </div>
            </div>
        </div>
    )
};
