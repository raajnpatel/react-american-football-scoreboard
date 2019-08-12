//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, homeAdd] = useState(0);
  const [awayScore, awayAdd] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lakers</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:08</div>
          <div className="away">
            <h2 className="away__name">Celtics</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="home_threePoint" onClick={()=>homeAdd(homeScore+3)}>3 Points</button>
          <button className="home_twoPoint" onClick={()=>homeAdd(homeScore+2)}>2 Pointer</button>
            <button className="home_onePoint" onClick={()=>homeAdd(homeScore+1)}>Free Throw</button>
        </div>
        <div className="awayButtons">
          <button className="away_threePoint" onClick={()=>awayAdd(awayScore+3)}>3 Pointer</button>
          <button className="away_twoPoint" onClick={()=>awayAdd(awayScore+2)}>2 Pointer</button>
            <button className="away_onePoint" onClick={()=>awayAdd(awayScore+1)}>Free Throw</button>
        </div>
      </section>
    </div>
  );
}

export default App;
