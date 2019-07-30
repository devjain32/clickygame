import React from "react";
import "./style.css";

function Sections(props) {
    return (
        <div className="card" onClick = {() => props.handleStatus(props.id, props.name)}>
            <div className="img-container"> 
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    );
}

export default Sections;
