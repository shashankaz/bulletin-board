import React from "react";
import styles from "./GoogleSlide.module.css";

const GoogleSlide = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <h2>Google Slide</h2>
      </div>
      <div className={styles.container}>
        <iframe
          src="https://docs.google.com/presentation/d/1RwLScBBksKxdD0n84TIpxPdNk5lsplYK6eCdKNOOYAc/embed?start=false&loop=false&delayms=3000"
          className={styles.iframe}
          allowFullScreen
          title="Google Slides Presentation"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleSlide;
