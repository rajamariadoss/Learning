import React, {useState} from 'react';

import './Boards.css';

const Boards = (props) => {
    const [p1Selections,setP1Selections] = useState(['']);
    const [p2Selections,setP2Selections] = useState(['']);
    const [winningPlayer, setWinningPlayer] = useState([]);

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

    let currentPlayerId = props.currentPlayer.id;

    const boardClickHandler = (event) => {

        if (Object.keys(winningPlayer).length ===  0 && event.target.innerHTML !== props.players[0].symbol && event.target.innerHTML !== props.players[1].symbol) {
            if (currentPlayerId === 'p1') {
                props.nextPlayer(props.players[1]);
                event.target.innerHTML = props.players[0].symbol;
                let selections = [...p1Selections, event.target.id];
                setP1Selections(selections);
                if(checkWinner(selections)){
                    setWinningPlayer (props.currentPlayer);
                }
            } else {
                props.nextPlayer(props.players[0]);
                event.target.innerHTML = props.players[1].symbol;
                let selections = [...p2Selections, event.target.id];
                setP2Selections(selections);
                if(checkWinner(selections)){
                    setWinningPlayer (props.currentPlayer);
                }
            }
        }
    };

    const refreshPage = () => {
        window.location.reload(false);
    };
      

    if (Object.keys(winningPlayer).length >  0) {
        return (
            <div className='game-winner-container'>
                <div className='game-winner-display'>{winningPlayer.title} Wins!!!</div>
                <div><button type='button' onClick={refreshPage}>Play Again</button></div>
            </div>
        );
    }

    return (
        <div className='game-boards-container'>
            <div className="game-boards__currentPlayer">
                Current Player: {props.currentPlayer.title}
            </div>
            <div className='game-boards__boards'>
                <div className='game-boards_boards-row1'>
                    <div id="b1" className='game-board' onClick={boardClickHandler}>

                    </div>
                    <div id="b2" className='game-board' onClick={boardClickHandler}>

                    </div>
                    <div id="b3" className='game-board' onClick={boardClickHandler}>

                    </div>
                </div>
                <div className='game-boards_boards-row2'>
                    <div id="b4" className='game-board' onClick={boardClickHandler}>

                    </div>
                    <div id="b5" className='game-board' onClick={boardClickHandler}>

                    </div>
                    <div id="b6" className='game-board' onClick={boardClickHandler}>

                    </div>
                </div>
                <div className='game-boards_boards-row3'>
                    <div id="b7" className='game-board' onClick={boardClickHandler}>

                    </div>
                    <div id="b8" className='game-board' onClick={boardClickHandler}>

                    </div>
                    <div id="b9" className='game-board' onClick={boardClickHandler}>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Boards;