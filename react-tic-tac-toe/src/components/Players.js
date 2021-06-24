import React from 'react';

import './Players.css';
import Player from './Player'

const Players = (props) => {

    return (
        <div className='game-players'>
            <div className='game-players__player1'>
                <Player title={props.players[0].title} symbol={props.players[0].symbol}/>
            </div>
            <div className='game-players__player2'>
                <Player title={props.players[1].title} symbol={props.players[1].symbol}/>
            </div>
        </div>
    )
};

export default Players;