import { useState } from "react";
import EnquireDialog from "../enquireDialog";
import styles from "./footer.module.css";
import { debounce } from "utiljs-pro";

export default function Footer() {
  const [showDialog, setShowDialog] = useState(false);
  const toggleShowDialog = debounce(() => setShowDialog(!showDialog), 200);
  return (
    <div className={`${styles.footer}`}>
      <div className={`${styles.top} flex items-start justify-between`}>
        <div className="flex flex-col">
          <div>
            <img src="/brand-logo.png" className={`${styles.brandImg}`} />
            <p className={styles.tagline}>
              Masterful design for interiors, architecture, and landscapes.
            </p>
          </div>
          <div className={`${styles.socials} flex items-center`}>
            <img
              className={styles.imgMedium}
              width={40}
              src="/icons/Whatsapp.svg"
              alt=""
            />
            <img
              className={styles.imgMedium}
              width={40}
              src="/icons/Instagram.png"
              alt=""
            />
            <img
              className={styles.imgMedium}
              width={40}
              src="/icons/Facebook.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className={styles.title}>Contact Details</div>
          <div className={`${styles.block} flex items-center`}>
            <img
              className={styles.imgMedium}
              width={40}
              src="/icons/Email.png"
              alt=""
            />
            <div>
              <div>Email</div>
              <div>linesncurve@gmail.com</div>
            </div>
          </div>
          <div className={`${styles.block} flex items-center`}>
            <img
              className={styles.imgMedium}
              width={40}
              src="/icons/Phone.png"
              alt=""
            />
            <div>
              <div>Contact</div>
              <div>+91 8788464468</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className={styles.title}>Quick links</div>
          <div>
            <div className={styles.link}>
              <a style={{textDecoration:'none', color:"inherit"}} href="/"> Services </a>
            </div>
            <div className={styles.link}>
              <a style={{textDecoration:'none', color:"inherit"}} href="/portfolio"> Portfolio </a>
            </div>
            <div className={styles.link}>
              <a style={{textDecoration:'none', color:"inherit"}} href="#" onClick={toggleShowDialog}>
                {" "}
                Contact Us{" "}
              </a>
            </div>
            <div className={styles.link}>
              <a style={{textDecoration:'none', color:"inherit"}} href="/about"> About Us </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className={styles.map}>
            <img src="/footer-map.png" alt="" />
          </div>
          <div>
            <div
              className={`${styles.buttonPrimary} flex items-center justify-center`}
            >
              Get Direction
              <img
                data-icon
                data-praveen
                width={20}
                src="/icons/arrow-right.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hr} data-is="hr"></div>
      <div className={`${styles.bottom} text-center`}>
        Copyright &copy; 2024 All Right Reserved
      </div>
      <div style={{ width: "500px" }}>
        <EnquireDialog show={showDialog} onClose={() => setShowDialog(false)} />
      </div>
    </div>
  );
}
