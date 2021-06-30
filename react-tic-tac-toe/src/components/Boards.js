import React, {useState} from 'react';

import './Boards.css';

const Boards = (props) => {

    const boards = ['b1','b2','b3','b4','b5','b6','b7','b8','b9'];

    const winningCombinations = [
        ['b1','b2','b3'],['b4','b5','b6'],['b7','b8','b9'],
        ['b1','b4','b7'],['b2','b5','b8'],['b3','b6','b9'],
        ['b1','b5','b9'], ['b3','b5','b7']
    ];

    // Hold player 1 selections
    const [p1Selections,setP1Selections] = useState([]);
    // Hold player 2 selections
    const [p2Selections,setP2Selections] = useState([]);
    // Hold Winning player
    const [winningPlayer, setWinningPlayer] = useState([]);
    // Hold Selected Boards
    const [boardSelections, setBoardSelections] = useState([]);

    const checkWinner = (playerSelections) => {
    
        let winner = false;
        winningCombinations.forEach(function(wc, index, array) {
            if  (wc.every(r => {return playerSelections.includes(r)})) {
                winner = true;
            }
          });
        return winner;
    };

    const boardClickHandler = (e, boardId) => {
        // Checking if board is already clicked and selected
        const isSelected = boardSelections.includes(boardId);
        if (isSelected) {
            return;
        } else {
            setBoardSelections(prevSelections=> [...prevSelections, boardId])
        }

        // if (Object.keys(winningPlayer).length ===  0 && event.target.innerHTML !== props.players[0].symbol && event.target.innerHTML !== props.players[1].symbol) {
        // If there is no winning player yet, then continue...
        if (Object.keys(winningPlayer).length ===  0) {
            let selections = [];
            if (props.currentPlayer.id === 'p1') {
                props.onNextPlayer(props.players[1]);
                selections = [...p1Selections, boardId];
                setP1Selections(selections);
                } else {
                props.onNextPlayer(props.players[0]);
                selections = [...p2Selections, boardId];
                setP2Selections(selections);
            }
            e.target.innerHTML = props.currentPlayer.symbol;
            if(checkWinner(selections)){
                setWinningPlayer (props.currentPlayer);
            }
         }
    };

    const newGame = () => {
        setP1Selections([]);
        setP2Selections([]);
        setWinningPlayer([]);
        setBoardSelections([]);
        props.onNextPlayer(props.players[0]);
    };
      

    if (Object.keys(winningPlayer).length >  0) {
        return (
            <div className='game-winner-container'>
                <div className='game-winner-display'>{winningPlayer.title} Wins!!!</div>
                <div><button type='button' onClick={newGame}>Play Again</button></div>
            </div>
        );
    }

    return (
        <div className='game-boards-container'>
            <div className="game-boards__currentPlayer">
                Current Player: {props.currentPlayer.title}
            </div>
            <div className='game-boards__boards'>
                {boards.map(id => <div id={id} className='game-board' onClick={(e) => boardClickHandler(e, id)} />)}
            </div>
        </div>
    )
};

export default Boards;