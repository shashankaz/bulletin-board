import React, { useEffect, useState } from "react";
import styles from "./Polls.module.css";

const pollQuestions = [
  {
    id: "poll1",
    question: "What's your favorite aspect of our company?",
    options: [
      "Work Environment",
      "Team Collaboration",
      "Career Opportunities",
      "Company Culture",
    ],
  },
  {
    id: "poll2",
    question: "How satisfied are you with your work-life balance?",
    options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"],
  },
  {
    id: "poll3",
    question: "What do you think about our health benefits?",
    options: ["Excellent", "Good", "Fair", "Poor"],
  },
  {
    id: "poll4",
    question: "Which company value do you align with most?",
    options: ["Integrity", "Innovation", "Excellence", "Customer Centricity"],
  },
];

const Polls = () => {
  const [pollData, setPollData] = useState(() => {
    const savedData = localStorage.getItem("pollData");
    return savedData
      ? JSON.parse(savedData)
      : Object.fromEntries(
          pollQuestions.map(({ id }) => [
            id,
            { option1: 0, option2: 0, option3: 0, option4: 0, totalVotes: 0 },
          ])
        );
  });

  const [userVotes, setUserVotes] = useState(() => {
    const savedVotes = localStorage.getItem("userVotes");
    return savedVotes ? JSON.parse(savedVotes) : {};
  });

  useEffect(() => {
    localStorage.setItem("pollData", JSON.stringify(pollData));
    localStorage.setItem("userVotes", JSON.stringify(userVotes));
  }, [pollData, userVotes]);

  const handleOptionClick = (pollId, option) => {
    if (!userVotes[pollId]) {
      setPollData((prevPollData) => {
        const updatedPoll = {
          ...prevPollData[pollId],
          [option]: prevPollData[pollId][option] + 1,
          totalVotes: prevPollData[pollId].totalVotes + 1,
        };
        return { ...prevPollData, [pollId]: updatedPoll };
      });
      setUserVotes((prevUserVotes) => ({ ...prevUserVotes, [pollId]: true }));
    } else {
      alert("You have already voted in this poll.");
    }
  };

  const getResults = (pollId) => {
    const { totalVotes, ...options } = pollData[pollId];
    return Object.entries(options).map(([key, value]) => {
      const percentage = totalVotes
        ? ((value / totalVotes) * 100).toFixed(2)
        : 0;
      return `${key.replace(
        "option",
        "Option "
      )}: ${percentage}% (${value} votes)`;
    });
  };

  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <h2>Polls</h2>
      </div>
      <div className={styles.container}>
        {pollQuestions.map(({ id, question, options }) => (
          <div key={id} className={styles.pollContainer}>
            <h1>{question}</h1>
            {options.map((option, index) => (
              <div
                key={index}
                className={styles.option}
                onClick={() => handleOptionClick(id, `option${index + 1}`)}
              >
                {option}
              </div>
            ))}
            {pollData[id].totalVotes > 0 && (
              <div className={styles.results}>
                <h2>Results:</h2>
                {getResults(id).map((result, index) => (
                  <div key={index} className={styles.result}>
                    {result}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Polls;
