import React from 'react';

import './Players.css';
import Player from './Player'

const Players = (props) => {

    return (
        <table>
            <tbody>
                <tr>
                    <td><Player title={props.players[0].title} symbol={props.players[0].symbol}/></td>
                    <td><Player title={props.players[1].title} symbol={props.players[1].symbol}/></td>
                </tr>
                <tr>
                    <td colSpan="2">Current player: {props.currentPlayerId}</td>
                </tr>
            </tbody>
        </table>
    )
};

export default Players;