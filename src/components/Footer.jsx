import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p className={styles.title}>EATTODAY.COM</p>
            <div className={styles.container}>
                <div>
                    <p className={styles.subTitle}>About Us</p>
                    <p>Home</p>
                    <p>How It Works</p>
                </div>
                <div>
                    <p className={styles.subTitle}>Contact Us</p>
                    <p>Linkedin</p>
                    <p>Twitter</p>
                    <p>Wechat</p>
                </div>
            </div>
            <p className={styles.right}>@2020 EATTODAY.</p>
        </div>
    )
}

export default Footer;