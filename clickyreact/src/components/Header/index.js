import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div className="parallax">
            <div className="intro">
                <div className="rainbow">
                    SpongeBob SquarePants Clicky Game
                </div>
            <div className="description">
                This is basically a memory game. Click on any picture but don't click on the same picture twice!
                <br></br>
                <br></br>
                Scroll down to play!
            </div>
        </div>
        </div>
    )
}

export default Header;