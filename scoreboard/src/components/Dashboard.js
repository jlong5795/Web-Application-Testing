import React from 'react';

const Dashboard = (props) => {

    const newBall = () => {
        if (props.balls < 3) {
           props.setBallCount(props.balls + 1);
        } else {
            clearCount();
        }
    }; 

    const newStrike = () => {
        if (props.strikes < 2) {
            props.setStrikeCount(props.strikes + 1);
        } else {
            clearCount();
        }
    }; 

    const newFoulBall = () => {
        if (props.strikes < 2) {
           props.setStrikeCount(props.strikes + 1);
        }
    };

    const clearCount = () => {
        props.setStrikeCount(0);
        props.setBallCount(0);
    }; 

    return (
        <div className='controls'>
            <button onClick={newBall}>Ball</button>
            <button onClick={newStrike}>Strike</button>
            <button onClick={newFoulBall}>Foul Ball</button>
            <button onClick={clearCount}>Hit</button>
        </div>
    )
};

export default Dashboard;