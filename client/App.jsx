// import functionality for react & router-dom
import React, { useState, useEffect } from 'react';

// import gecsbox & containers
// import MainContainer from './containers/MainContainer';
import MenuBar from './containers/MenuBar';

// bootstrap & style imports
import './scss/styles.scss';

function App() {
  const [gecs, setGecs] = useState(0);
  const [clickValue, setClickValue] = useState(1);
  const [saveData, setSaveData] = useState({gecs: gecs, clickValue: clickValue, costArr: []});

  const [bOneCost, setOneCost] = useState(1);
  const [bTwoCost, setTwoCost] = useState(50);
  const [bThreeCost, setThreeCost] = useState(500);
  const [bFourCost, setFourCost] = useState(1000);

  const costArr = [bOneCost, bTwoCost, bThreeCost, bFourCost];

  useEffect(() => {
    setSaveData({gecs: gecs, clickValue: clickValue, costArr: costArr});
  }, [bFourCost])

  // const buttonCheck = () => {
  //   if (gecs > 10000) return console.log('wip');
  //   // force redirect to mememe
  // }

  function signIn (username, password){
    useEffect(() => {
      fetch('/api/signIn', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username: username, password: password})
      })
    })
  };

  function signUp (newUsername, newPassword){
    useEffect(() => {
      fetch('/api/signUp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username: newUsername, password: newPassword, saveData: saveData})
      })
    })
  };

  

  return (
    <div className='App'>
      <article className="gecsBox">
        <div className="gecsBoxContainer">
          <h1>{gecs} gecs</h1>
          <button className="gecButton" onClick={() => {
            setGecs(gecs + clickValue)
            buttonCheck();
            }}>gec {clickValue} times</button>
        </div>
      </article>
      <article className="bottomBox">

        <div className="bottomBoxContainer">
          {/* <div className="Idlers">

          </div> */}
          <div className="unlocks">

            <h3>UNLOCKS</h3>

            <div className="unlockButtons">

              <button id="b1" onClick={() => {
                if (gecs - bOneCost >= 0) {
                  setClickValue(clickValue + 1);
                  setGecs(gecs - bOneCost);
                  setOneCost(bOneCost * 3);
                }}}
                >+1 gec/click <br/> cost: {bOneCost} 
              </button>

              <button id="b2" onClick={() => {
                if (gecs - bTwoCost >= 0) {
                  setClickValue(clickValue + 5);
                  setGecs(gecs - bTwoCost);
                  setTwoCost(bTwoCost * 2);
                }}}
                >+5 gecs/click <br/> cost: {bTwoCost} 
              </button>

              <button id="b3" onClick={() => {
                if (gecs - bThreeCost >= 0){
                  setClickValue(clickValue + 50);
                  setGecs(gecs - bThreeCost);
                  setThreeCost(bThreeCost * 2);
                }}}
                >+50 gecs/click <br/> cost: {bThreeCost} 
              </button>

              <button id="b4" onClick={() => {
                if (gecs - bFourCost >= 0){
                  setClickValue(clickValue + 100);
                  setGecs(gecs - bFourCost);
                  setFourCost(bFourCost * 2);
                }}}>+100 gecs/click <br/> cost: {bFourCost} 
              </button>
            </div>
          </div>
        </div>
      </article>
      <div className='menuBar'>
        <form id="signIn">
          <input type="text" placeholder="username" id="username"></input>
          <input type="text" placeholder="password" id="password"></input>
        </form>
        <div id="userAcctButtons">

            <button id="signInButton" type="submit" onClick = {(e) => {
              e.preventDefault();
              signIn(document.getElementById('username').value, document.getElementById('password').value);
            }}>sign in</button>

            <button id="signUpButton" type="submit" onClick = {(e) => {
              e.preventDefault();
              signUp(document.getElementById('username').value, document.getElementById('password').value);
            }}>sign up</button>

        </div>
      </div>
    </div>
  );
}

export default App;