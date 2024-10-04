import { useState } from "react"
import { navLinks } from "../../constants"
import styles from "./navbar.module.css"
import { NavLink } from "react-router-dom"
import { debounce } from "utiljs-pro"
import EnquireDialog from "../enquireDialog.tsx"

export default function Navbar() {
    const [showNavlinks, setShowNavlinks] = useState(false)
    const [showDialog, setShowDialog] = useState(false)

    const toggleShowNavlinks = debounce(() => setShowNavlinks(!showNavlinks), 200)
    const toggleShowDialog = debounce(() => setShowDialog(!showDialog), 200)

    return (
        <>
            <div className={`${styles.navbar} flex items-center justify-between`}>
                <div className={`${styles.left} flex items-center`}>
                    <img src="/brand-logo.png" className={`${styles.brandImg}`} />
                </div>

                <button data-is="toggler" data-toggled={showNavlinks}
                    onClick={toggleShowNavlinks}
                >
                    <img src="/icons/menu.svg" alt="" />
                </button>

                <div className={`${styles.right} flex items-center`} data-show={showNavlinks}>
                    {navLinks.map(({ text, path }) =>
                        <NavLink
                            to={path}
                            className={({ isActive }) => `${styles.navLink} data-praveen cursor-pointer${isActive ? " " + styles.active : ""}`}
                            onClick={() => {
                                document.getElementById(path)?.scrollIntoView()
                            }}
                            key={text}>
                            {text}
                        </NavLink>
                    )}
                    <button
                        onClick={toggleShowDialog}
                        className={`${styles.navLink} ${styles.primary} active-press data-praveen cursor-pointer `}>Enquire Now</button>
                </div>
            </div>
            <EnquireDialog show={showDialog} onClose={() => setShowDialog(false)} />
        </>
    )
};
