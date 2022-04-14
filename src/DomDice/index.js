import { useState } from 'react';
import './DomDice.css';
import diceImg1 from './dice1.png';
import diceImg2 from './dice2@2x.png';
import diceImg3 from './dice3@2x.png';
import diceImg4 from './dice4@2x.png';
import diceImg5 from './dice5@2x.png';
import diceImg6 from './dice6@2x.png';
const arrDiceImg = [
  diceImg1,
  diceImg2,
  diceImg3,
  diceImg4,
  diceImg5,
  diceImg6,
];
function DomDice() {
  const [idx1,setIdx1] = useState(0);
  const [idx2,setIdx2] = useState(0);

  function randomIndex(){
    return Math.floor(Math.random() * 6);
  }

  function handleRollDice(){
    setIdx1(randomIndex());
    setIdx2(randomIndex());
  }

  return (
    <div>
      <div className="container">
        <div className="logo"><img src="./images/diceeLogo@2x.png" alt="" /></div>
        <div className="list-dice">
          <img className="dice-1" src={arrDiceImg[idx1]} alt="" />
          <img id="dice-2" src={arrDiceImg[idx2]} alt="" />
        </div>
        <button className="roll-dice" onClick={handleRollDice}>Roll Dice</button>
      </div>
    </div>
  );
}

export default DomDice;