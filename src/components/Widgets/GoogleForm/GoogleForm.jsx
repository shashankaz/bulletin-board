import React from "react";
import styles from "./GoogleForm.module.css";

const GoogleForm = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <h2>Google Form</h2>
      </div>
      <div className={styles.container}>
        <iframe
          src="https://forms.gle/tY9bFRBZPUXaB1gHA"
          className={styles.iframe}
          allowFullScreen
          title="Google Form"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleForm;
