import React, {useState} from 'react';

import './Game.css';
import Players from './Players';
import Boards from './Boards';

const Game = () => {
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

      const [currentPlayer, setCurrentPlayer] = useState(players[0]);
      
      const onNextPlayerHandler = (nextPlayer) => {
        setCurrentPlayer(nextPlayer);
      };
    
      return (
        <div className='game-container'>
          <div className='game-head'>
            <h3>Tic-Tac-Toe</h3>
          </div>
            <Players players={players} />
            <Boards players={players} currentPlayer={currentPlayer} nextPlayer={onNextPlayerHandler} />
        </div>
      );
};

export default Game;