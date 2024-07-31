import React, { useContext } from "react";
import SidePane from "../SidePane/SidePane";
import Quotes from "../Widgets/Quotes/Quotes";
import GoogleSlide from "../Widgets/GoogleSlide/GoogleSlide";
import PomodoroTimer from "../Widgets/PomodoroTimer/PomodoroTimer";
import GoogleSpreadsheet from "../Widgets/GoogleSpreadsheet/GoogleSpreadsheet";
import GoogleForm from "../Widgets/GoogleForm/GoogleForm";
import Music from "../Widgets/Music/Music";
import Polls from "../Widgets/Polls/Polls";
import IssueTracker from "../Widgets/IssueTracker/IssueTracker";
import DGC from "../Widgets/DGC/DGC";
import OpportunityBoard from "../Widgets/OpportunityBoard/OpportunityBoard";
import { ToggleContext } from "../../context/ToggleContext";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const { cards } = useContext(ToggleContext);

  return (
    <div className={styles.home}>
      <SidePane />
      <div className={styles.part1}>
        {cards["quotes"] && <Quotes />}
        <div className={styles.part2}>
          {cards["pomodoroTimer"] && <PomodoroTimer />}
          {cards["googleSlide"] && <GoogleSlide />}
          {cards["googleSpreadsheet"] && <GoogleSpreadsheet />}
          {cards["googleForm"] && <GoogleForm />}
          {cards["music"] && <Music />}
          {cards["polls"] && <Polls />}
          {cards["issueTracker"] && <IssueTracker />}
          {cards["dgc"] && <DGC />}
          {cards["opportunityBoard"] && <OpportunityBoard />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
