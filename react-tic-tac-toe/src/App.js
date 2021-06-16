import React, {useState} from 'react';

import Players from './components/Players';
import Boards from './components/Boards';

const  App = () => {

  const players = [
    {
      id: 'p1',
      title: 'Player 1',
      symbol: 'X'
    },
    {
      id: 'p2',
      title: 'Player 2',
      symbol: 'O'
    },
  ];

  const [currentPlayerId, setCurrentPlayerId] = useState(players[0].id);
  
  const onNextPlayerHandler = (nextPlayer) => {
    setCurrentPlayerId(nextPlayer.id);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th><h3>Tic-Tac-Toe</h3></th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <Players players={players} currentPlayerId={currentPlayerId} />
          </td>
        </tr>
        <tr>
          <td><hr></hr></td>
        </tr>
        <tr>
          <td>
            <Boards players={players} currentPlayerId={currentPlayerId} nextPlayer={onNextPlayerHandler} />
          </td>
        </tr>
        </tbody>
      </table>
      
      
    </div>
  );
}

export default App;
