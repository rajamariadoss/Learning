import React, {useState} from 'react';

import './Boards.css';

const Boards = (props) => {
    const [p1Selections,setP1Selections] = useState(['']);
    const [p2Selections,setP2Selections] = useState(['']);
    const [winningPlayer, setWinningPlayer] = useState('');

    const winningCombinations = [
        ['b1','b2','b3'],['b4','b5','b6'],['b7','b8','b9'],
        ['b1','b4','b7'],['b2','b5','b8'],['b3','b6','b9'],
        ['b1','b5','b9'], ['b3','b5','b7']
    ];

    const checkWinner = (playerSelections) => {
    
        let winner = false;
        winningCombinations.forEach(function(wc, index, array) {
            if  (wc.every(r => {return playerSelections.includes(r)})) {
                winner = true;
            }
          });
        return winner;
    };

    const boardClickHandler = (event) => {

        let symbol;
        if (winningPlayer === '' && event.target.innerHTML !== props.players[0].symbol && event.target.innerHTML !== props.players[1].symbol) {
            if (props.currentPlayerId === 'p1') {
                props.nextPlayer(props.players[1]);
                symbol = props.players[0].symbol;
                let selections = [...p1Selections, event.target.id];
                setP1Selections(selections);
                if(checkWinner(selections)){
                    setWinningPlayer ('player1 wins');
                }
            } else {
                props.nextPlayer(props.players[0]);
                symbol = props.players[1].symbol;
                let selections = [...p2Selections, event.target.id];
                setP2Selections(selections);
                if(checkWinner(selections)){
                    setWinningPlayer ('player2 wins');
                }
            }
            event.target.innerHTML = symbol;
        }
    };

    return (
        <div>
        <table>
            <tbody>
            <tr>
                <td>Player 1 Selections:: {p1Selections} </td>
            </tr>
            <tr>
                <td>Player 2 Selections:: {p2Selections}</td>
            </tr>
            <tr>
                <td>{winningPlayer}</td>
            </tr>
            </tbody>
        </table>
        <table border='1' width='300'>
            <tbody>
              <tr>
                <td>
                    <label id="b1" onClick={boardClickHandler}>1</label>
                </td>
                <td>
                    <label id="b2" onClick={boardClickHandler}>2</label>
                </td>
                <td>
                    <label id="b3" onClick={boardClickHandler}>3</label>
                </td>
              </tr>
              <tr>
                <td>
                    <label id="b4" onClick={boardClickHandler}>4</label>
                </td>
                <td>
                    <label id="b5" onClick={boardClickHandler}>5</label>
                </td>
                <td>
                    <label id="b6" onClick={boardClickHandler}>6</label>
                </td>
              </tr>
              <tr>
                <td>
                    <label id="b7" onClick={boardClickHandler}>7</label>
                </td>
                <td>
                    <label id="b8" onClick={boardClickHandler}>8</label>
                </td>
                <td>
                    <label id="b9" onClick={boardClickHandler}>9</label>
                </td>
              </tr>
          </tbody>
        </table>
        </div>
    )
};

export default Boards;