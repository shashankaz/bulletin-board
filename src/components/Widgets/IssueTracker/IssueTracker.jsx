import React from "react";
import styles from "./IssueTracker.module.css";

const IssueTracker = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <h2>Issue Tracker</h2>
      </div>
      <div className={styles.container}>
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTXnxRsCLOTauSIpgjMpG3KG3b50B6Pyoq1EjQAalUPAkXMzBcS56Hcbde0uoK7mGn85IFo2621n5k7/pubhtml?widget=true&amp;headers=false"
          className={styles.iframe}
          allowFullScreen
          title="Google Spreadsheet"
        ></iframe>
      </div>
    </div>
  );
};

export default IssueTracker;
