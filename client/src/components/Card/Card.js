import React from "react";
import "./Card.css";

const Card = props => (
    <div class="card">
        <div class="card-header">{props.cardTitle}</div>
        <ul class="list-group list-group-flush">
            {props.children}
        </ul>
    </div>
)

export default Card; 