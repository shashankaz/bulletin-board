import React from "react";
import styles from "./GoogleSpreadsheet.module.css";

const GoogleSpreadsheet = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <h2>Google Spreadsheet</h2>
      </div>
      <div className={styles.container}>
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSBIZbI9Dt2UxwCf0XEUcppCvxUWx86sRlnWcOkrAXHLt3e9KBVMHThVIDmCGvFBgJylbhSGjYLk3DS/pubhtml?widget=true&amp;headers=false"
          className={styles.iframe}
          allowFullScreen
          title="Google Spreadsheet"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleSpreadsheet;
