import React from 'react';

const Player = (props) => {
    return (
        <div>{props.title} [{props.symbol}]</div>
    )
};

export default Player;