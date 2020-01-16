import React from 'react';

const Display = (props) => {
    
    return (
        <div className="container">
            <section className="scoreboard">
                <div className="topRow">
                    <div className="balls">
                        <h2 className="ball_label">Balls</h2>
                        <div className="ball_count">
                            <p>{props.balls}</p>
                        </div>
                    </div>
                    <div className="strikes">
                        <h2 className="strike_label">Strikes</h2>
                        <div className="strike_count">
                            <p>{props.strikes}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
	)
};

export default Display;
