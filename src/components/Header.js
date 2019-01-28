import React from 'react';

const Header = props => (
    <div className="container text-center" id="header-container">
        <h1 id="logo"><b>Clicky Game</b></h1>
        <br/>
        <h5 className="subtitle">How to play:</h5>
        <br/>
        <h5 className="subtitle">Click on an image to start the game! Images will change after every click.</h5>
        <br/>
        <h5>Try to click each image only once and achieve the highest score</h5>
    </div>
)

export default Header;