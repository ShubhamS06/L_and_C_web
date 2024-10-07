import { useEffect, useRef } from "react"
import styles from "./enquireDialog.module.css"

export default function EnquireDialog({ show, onClose }: { show: boolean, onClose: () => void }) {
    const dialogRef = useRef<HTMLDialogElement>(null)

    // 

    useEffect(() => {
        if (!dialogRef.current) return;

        if (show) {
            if (!dialogRef.current.open)
                dialogRef.current.showModal()
        } else {
            if (dialogRef.current.open)
                dialogRef.current.close()
        }
    }, [show])

    return (
        <dialog className={`${styles.container} relative flex flex-col items-center`} ref={dialogRef}
            onClose={onClose}
        >
            <button className={`${styles.close} active-press cursor-pointer`}
                onClick={onClose}
            >
                <img src="/icons/close-x.svg" alt="" />
            </button>

            <div className={styles.title}>Let's Build Your Dream Space</div>

            <form action="">
                <div className={`${styles.form} flex flex-col`}>
                    <div className={`${styles.inputGroup} flex flex-wrap`}>
                        <label className={`${styles.label} relative flex-1 flex flex-col`}>
                            <input className={styles.input} type="text" placeholder=" " />
                            <span className="absolute-center">Name</span>
                        </label>
                        <label className={`${styles.label} relative flex-1 flex flex-col`}>
                            <input className={styles.input} type="email" placeholder=" " />
                            <span className="absolute-center">Email</span>
                        </label>
                    </div>
                    <div className={`${styles.inputGroup} flex flex-wrap`}>
                        <label className={`${styles.label} relative flex-1 flex flex-col`}>
                            <input className={styles.input} type="text" placeholder=" " />
                            <span className="absolute-center">Contact Number</span>
                        </label>
                        <label className={`${styles.label} relative flex-1 flex flex-col`}>
                            <input className={styles.input} type="email" placeholder=" " />
                            <span className="absolute-center">Location</span>
                        </label>
                    </div>
                    <div>
                        <div className={styles.mb2}>Choose Project Type</div>
                        <div className={`${styles.inputGroup} flex flex-wrap`}>
                            <label className={`${styles.checkboxLabel} flex flex-col items-center`}>
                                <input type="checkbox" />
                                <div className="flex justify-center items-center aspect-square"><img src="/icons/interior.svg" alt="" /></div>
                                <span className="">Interior</span>
                            </label>
                            <label className={`${styles.checkboxLabel} flex flex-col items-center`}>
                                <input type="checkbox" />
                                <div className="flex justify-center items-center aspect-square"><img src="/icons/architecture.svg" alt="" /></div>
                                <span className="">Architecture</span>
                            </label>
                            <label className={`${styles.checkboxLabel} flex flex-col items-center`}>
                                <input type="checkbox" />
                                <div className="flex justify-center items-center aspect-square"><img src="/icons/landscape.svg" alt="" /></div>
                                <span className="">Landscape</span>
                            </label>
                        </div>
                    </div>
                    <label className={`${styles.label} relative flex-1 flex flex-col`}>
                        <input className={styles.input} type="text" placeholder=" " />
                        <span className="absolute-center" data-mb2>Tell us more about your projecct</span>
                    </label>

                    <button type="submit" className={styles.primaryButton}>Enquire Now</button>
                </div>
            </form>

        </dialog>
    )
};
