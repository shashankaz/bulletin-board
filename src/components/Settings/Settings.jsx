import React, { useContext, useState } from "react";
import widgets from "../../data/widgets.json";
import styles from "./Settings.module.css";
import { ToggleContext } from "../../context/ToggleContext";

const Settings = ({ handleClose }) => {
  const {
    cards,
    hideCard,
    showCard,
    spotify,
    setSpotifyUrl,
    location,
    updateLocation,
  } = useContext(ToggleContext);
  const [newLocation, setNewLocation] = useState(location);

  const handleToggle = (id) => {
    if (cards[id]) {
      hideCard(id);
    } else {
      showCard(id);
    }
  };

  const handleSpotify = (e) => {
    setSpotifyUrl(e.target.value);
  };

  const handleLocationUpdate = (e) => {
    setNewLocation(e.target.value);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Settings</h2>
          <button className={styles.close} onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className={styles.body}>
          <h3>Manage Widgets</h3>
          <ul>
            {widgets.map((widget) => (
              <li key={widget.id}>
                <label>
                  {widget.title}
                  <div className={styles.checkboxWrapper}>
                    <input
                      className={styles.ikxBAC}
                      type="checkbox"
                      checked={cards[widget.id]}
                      onChange={() => handleToggle(widget.id)}
                    />
                  </div>
                </label>
              </li>
            ))}
          </ul>
          <h3>Manage Spotify Playlist</h3>
          <input
            type="text"
            placeholder="Your Spotify Playlist Url"
            value={spotify}
            onChange={handleSpotify}
          />
          <h3>Location</h3>
          <input
            type="text"
            placeholder="Enter Location"
            value={newLocation}
            onChange={handleLocationUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
