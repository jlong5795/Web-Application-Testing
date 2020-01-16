import React from 'react';

const Display = () => {
    

    return (
        <div className="container">
            <section className="scoreboard">
                <div className="topRow">
                    <div className="balls">
                        <h2 className="ball_label">Balls</h2>
                        <div className="ball_count">
                            {balls}
                        </div>
                    </div>
                    <div className="strikes">
                        <h2 className="strike_label">Strikes</h2>
                        <div className="strike_count">
                            {stikes}
                        </div>
                    </div>
                </div>
            </section>
        </div>
	)
};

export default Display;
