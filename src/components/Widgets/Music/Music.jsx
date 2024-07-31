import React, { useContext } from "react";
import styles from "./Music.module.css";
import { ToggleContext } from "../../../context/ToggleContext";

const Music = () => {
  const { spotify } = useContext(ToggleContext);

  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <h2>Music</h2>
      </div>
      <div className={styles.container}>
        <iframe
          src={spotify}
          className={styles.iframe}
          allow="encrypted-media"
          title="Spotify Playlist"
        ></iframe>
      </div>
    </div>
  );
};

export default Music;
