import React from 'react';

import './Boards.css';

const Boards = (props) => {
    // let currentPlayerId = props.currentPlayerId;
    const boardClickHandler = (event) => {
        console.log(event);
        if (props.currentPlayerId === 'p1') {
            props.nextPlayer(props.players[1]);
            event.target.innerHTML = props.players[0].symbol;
        } else {
            props.nextPlayer(props.players[0]);
            event.target.innerHTML = props.players[1].symbol;
        }
    };

    return (
        <table border='1' width='300'>
            <tbody>
              <tr>
                <td>
                    <label onClick={boardClickHandler}>1</label>
                </td>
                <td>
                    <label onClick={boardClickHandler}>2</label>
                </td>
                <td>
                    <label onClick={boardClickHandler}>3</label>
                </td>
              </tr>
              <tr>
                <td>
                    <label onClick={boardClickHandler}>4</label>
                </td>
                <td>
                    <label onClick={boardClickHandler}>5</label>
                </td>
                <td>
                    <label onClick={boardClickHandler}>6</label>
                </td>
              </tr>
              <tr>
                <td>
                    <label onClick={boardClickHandler}>7</label>
                </td>
                <td>
                    <label onClick={boardClickHandler}>8</label>
                </td>
                <td>
                    <label onClick={boardClickHandler}>9</label>
                </td>
              </tr>
          </tbody>
        </table>
    )
};

export default Boards;