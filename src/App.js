import logo from './logo.svg';
import './App.css';
import Dice from './components/Dice';
import { useEffect } from 'react';
import Game from './components/Game';
import bg from './assets/img/bgGame.png'
import Popup from './components/Popup';
const style = {
  backgroundImage: bg
}
function App() {
  return (
    <div>
      <div className="container" style={style}>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '35px 0px' }}>
          <Dice dice={"dice1"} actionType={"DICE_1"} />
          <Dice dice={"dice2"} actionType={"DICE_2"} />
          <Dice dice={"dice3"} actionType={"DICE_3"} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Game />
        </div>

      </div>
      <Popup />
    </div>
  );
}

export default App;
