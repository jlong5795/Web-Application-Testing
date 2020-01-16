import React, { useState } from 'react';

const Dashboard = () => {
    const [balls, setBallCount] = useState();
    const [strikes, setStrikeCount] = useState();

    const newBall = () => {
        
    }; 

    const newStrike = () => {

    }; 

    const newFoulBall = () => {

    };

    const clearCount = () => {

    }; 









    return (
        <div className='controls'>
            <button>Ball</button>
            <button>Strike</button>
            <button>Foul Ball</button>
            <button>Hit</button>
        </div>
    )

};

export default Dashboard;