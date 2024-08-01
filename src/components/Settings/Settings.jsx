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

  const handleLocationChange = (e) => {
    setNewLocation(e.target.value);
  };

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    updateLocation(newLocation);
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
          <div>
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
          </div>
          <div>
            <h3>Manage Spotify Playlist</h3>
            <input
              type="text"
              placeholder="Your Spotify Playlist Url"
              value={spotify}
              onChange={handleSpotify}
            />
          </div>
          <div>
            <h3 className="location">Location</h3>
            <form onSubmit={handleLocationSubmit}>
              <input
                type="text"
                placeholder="Your Location"
                value={newLocation}
                onChange={handleLocationChange}
              />
              <button type="submit">Update Location</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
