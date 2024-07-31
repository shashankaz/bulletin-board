import React, { useEffect, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import Settings from "../Settings/Settings";
import announcements from "../../data/announcements.json";
import tips from "../../data/tips.json";
import styles from "./SidePane.module.css";

const SidePane = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [topSites, setTopSites] = useState([]);
  const [showSettings, setShowSettings] = useState(false);
  const [randomTips, setRandomTips] = useState([]);
  const [location, setLocation] = useState(
    localStorage.getItem("location") || "New York"
  );
  const [weather, setWeather] = useState({});

  const handleOpenSettings = () => {
    setShowSettings(true);
  };

  const handleCloseSettings = () => {
    setShowSettings(false);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTopSites([
      { title: "Google", url: "https://www.google.com" },
      { title: "YouTube", url: "https://www.youtube.com" },
      { title: "Facebook", url: "https://www.facebook.com" },
      { title: "Twitter", url: "https://www.twitter.com" },
      { title: "LinkedIn", url: "https://www.linkedin.com" },
    ]);
  }, []);

  useEffect(() => {
    const shuffledTips = shuffleArray(tips);
    setRandomTips(shuffledTips.slice(0, 5));
  }, []);

  useEffect(() => {
    fetchWeather(location);
  }, [location]);

  const fetchWeather = (location) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=0a7c83a762342578e2829f94cda3f9dc`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather({
          temperature: data.main.temp,
          description: data.weather[0].description,
          icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
        });
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  };

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
    localStorage.setItem("location", newLocation);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const hours = dateTime.getHours().toString().padStart(2, "0");
  const minutes = dateTime.getMinutes().toString().padStart(2, "0");
  const day = days[dateTime.getDay()];
  const date = dateTime.getDate();
  const month = months[dateTime.getMonth()];
  const year = dateTime.getFullYear();

  return (
    <div className={styles.sidePane}>
      <div className={styles.part1}>
        <p className={styles.time}>{`${hours}:${minutes}`}</p>
        <p className={styles.date}>{`${day}, ${month} ${date}, ${year}`}</p>
        <div className={styles.weather}>
          {weather.temperature ? (
            <>
              <p>{`${weather.temperature}°C, ${weather.description}`}</p>
            </>
          ) : (
            <p>Loading weather...</p>
          )}
        </div>
        <div className={styles.announcements}>
          <h2>Announcements</h2>
          <ul>
            {announcements.map((announcement, index) => (
              <li key={index}>{announcement.title}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.part2}>
        <h2>Popular Sites</h2>
        <ul>
          {topSites.map((site, index) => (
            <li key={index}>
              <div className={styles.icon}>
                <img
                  src={`https://www.google.com/s2/favicons?domain=${site.url}`}
                  alt={`${site.title} favicon`}
                />
              </div>
              <a href={site.url} target="_blank" rel="noopener noreferrer">
                {site.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.part3}>
        <h2>Productivity Tips</h2>
        <ul>
          {randomTips.map((tip, index) => (
            <li key={index}>{tip.tip}</li>
          ))}
        </ul>
      </div>
      <div className={styles.part4}>
        <div>
          <IoMdSettings onClick={handleOpenSettings} />
          {showSettings && (
            <Settings
              handleClose={handleCloseSettings}
              location={location}
              onLocationChange={handleLocationChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SidePane;
