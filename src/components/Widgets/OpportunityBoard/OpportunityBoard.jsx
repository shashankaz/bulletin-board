import React from "react";
import styles from "./OpportunityBoard.module.css";

const OpportunityBoard = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <h2>Opportunity Board</h2>
      </div>
      <div className={styles.container}>
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQlg3zhP2Kwmi0ZKyiH04VNpfcGoq0u6DPZ9idwZwrUvEc3K-c5HIHiw9iWcPZlT0_D0hryu-ODH4I-/pubhtml?widget=true&amp;headers=false"
          className={styles.iframe}
          allowFullScreen
          title="Google Spreadsheet"
        ></iframe>
      </div>
    </div>
  );
};

export default OpportunityBoard;
