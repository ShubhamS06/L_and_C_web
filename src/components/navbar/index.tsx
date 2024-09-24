import { useState } from "react"
import { navLinks } from "../../constants"
import styles from "./navbar.module.css"

export default function Navbar() {
    const [show, setShow] = useState(false)

    return (
        <div className={`${styles.navbar} flex items-center justify-between`}>
            <div className={`${styles.left} flex items-center`}>
                <img src="/brand-logo.png" className={`${styles.brandImg}`} />
            </div>

            <button data-is="toggler" data-toggled={show}
                onClick={() => setShow(!show)}
            ><img src="/icons/menu.svg" alt="" /></button>

            <div className={`${styles.right} flex items-center`} data-show={show}>
                {navLinks.map(({ text, path, isPrimary }) =>
                    <a
                        className={`${styles.navLink} ${isPrimary ? styles.primary : ""} data-praveen cursor-pointer`}
                        data-active={path === "/"}
                        onClick={() => {
                            document.getElementById(path)?.scrollIntoView()
                        }}
                        key={text}>
                        {text}
                    </a>)}
            </div>
        </div>
    )
};
