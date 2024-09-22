import { useContext } from "react"
import { brandName, navLinks } from "../../constants"
import styles from "./navbar.module.css"

export default function Navbar() {

    return (
        <div className={`${styles.navbar} flex items-center justify-between`}>
            <div className={`${styles.left} flex items-center`}>
                <img src="/brand-logo.png" className={`${styles.brandImg}`} />
            </div>
            <div className={`${styles.right} flex items-center`}>
                {navLinks.map(({ text, path, isPrimary }) =>
                    <a
                        className={`${styles.navLink} ${isPrimary ? styles.primary : ""} flex flex-col items-center cursor-pointer`}
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
