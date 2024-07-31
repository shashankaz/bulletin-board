import React, { useState, useEffect } from "react";
import styles from "./PomodoroTimer.module.css";
import alarmSound from "./alarm.mp3";

const PomodoroTimer = () => {
  const [sessionTime, setSessionTime] = useState(25 * 60);
  const [breakTime, setBreakTime] = useState(5 * 60);
  const [isSessionRunning, setIsSessionRunning] = useState(false);
  const [isBreakRunning, setIsBreakRunning] = useState(false);
  const [sessionInterval, setSessionInterval] = useState(null);
  const [breakInterval, setBreakInterval] = useState(null);
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);

  const alarm = new Audio(alarmSound);

  useEffect(() => {
    if (sessionTime === 0) {
      clearInterval(sessionInterval);
      setIsSessionRunning(false);
      alarm.play();
      alert("Session completed! Take a break.");
    }
  }, [sessionTime, sessionInterval, alarm]);

  useEffect(() => {
    if (breakTime === 0) {
      clearInterval(breakInterval);
      setIsBreakRunning(false);
      alarm.play();
      alert("Break completed! Start a new session.");
    }
  }, [breakTime, breakInterval, alarm]);

  const updateDisplay = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const startSessionTimer = () => {
    if (!isSessionRunning) {
      setIsSessionRunning(true);
      setSessionInterval(
        setInterval(() => {
          setSessionTime((prev) => prev - 1);
        }, 1000)
      );
    } else {
      clearInterval(sessionInterval);
      setIsSessionRunning(false);
    }
  };

  const resetSessionTimer = () => {
    clearInterval(sessionInterval);
    setIsSessionRunning(false);
    setSessionTime(sessionLength * 60);
  };

  const startBreakTimer = () => {
    if (!isBreakRunning) {
      setIsBreakRunning(true);
      setBreakInterval(
        setInterval(() => {
          setBreakTime((prev) => prev - 1);
        }, 1000)
      );
    } else {
      clearInterval(breakInterval);
      setIsBreakRunning(false);
    }
  };

  const resetBreakTimer = () => {
    clearInterval(breakInterval);
    setIsBreakRunning(false);
    setBreakTime(breakLength * 60);
  };

  const updateLength = (type, change) => {
    if (type === "session") {
      const newLength = sessionLength + change;
      if (newLength >= 1 && newLength <= 60) {
        setSessionLength(newLength);
        setSessionTime(newLength * 60);
      }
    } else if (type === "break") {
      const newLength = breakLength + change;
      if (newLength >= 1 && newLength <= 60) {
        setBreakLength(newLength);
        setBreakTime(newLength * 60);
      }
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <h2>Pomodoro Timer</h2>
      </div>
      <div className={styles.pomodoroContainer}>
        <div className={styles.timerDisplay}>
          <h2 className={styles.timerLabel}>SESSION</h2>
          <p className={styles.timerValue}>{updateDisplay(sessionTime)}</p>
          <div className={styles.timerControls}>
            <button className={styles.timerButton} onClick={startSessionTimer}>
              {isSessionRunning ? "Stop" : "Start"}
            </button>
            <button className={styles.timerButton} onClick={resetSessionTimer}>
              Reset
            </button>
          </div>
        </div>
        <div className={styles.lengthControls}>
          <div className={styles.lengthControl}>
            <div className={styles.lengthButtons}>
              <button
                className={styles.lengthButton}
                onClick={() => updateLength("break", -1)}
                aria-label="Decrease break length"
              >
                -
              </button>
              <span className={styles.lengthValue}>{breakLength}</span>
              <button
                className={styles.lengthButton}
                onClick={() => updateLength("break", 1)}
                aria-label="Increase break length"
              >
                +
              </button>
            </div>
            <p className={styles.lengthLabel}>Break Length</p>
          </div>
          <div className={styles.lengthControl}>
            <div className={styles.lengthButtons}>
              <button
                className={styles.lengthButton}
                onClick={() => updateLength("session", -1)}
                aria-label="Decrease session length"
              >
                -
              </button>
              <span className={styles.lengthValue}>{sessionLength}</span>
              <button
                className={styles.lengthButton}
                onClick={() => updateLength("session", 1)}
                aria-label="Increase session length"
              >
                +
              </button>
            </div>
            <p className={styles.lengthLabel}>Session Length</p>
          </div>
        </div>
        <div className={styles.breakTimer}>
          <h3 className={styles.breakLabel}>BREAK</h3>
          <p className={styles.breakValue}>{updateDisplay(breakTime)}</p>
          <div className={styles.breakControls}>
            <button className={styles.breakButton} onClick={startBreakTimer}>
              {isBreakRunning ? "Stop" : "Start"}
            </button>
            <button className={styles.breakButton} onClick={resetBreakTimer}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
