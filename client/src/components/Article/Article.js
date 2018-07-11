import React from "react";

const Article = props => (
    <li className="list-group-item">
        <p><a href={props.url} target="_blank">{props.title}</a></p>
        {props.date && <p>Published {props.date}</p>}
        <button className={`btn btn-${props.buttonColor}`} onClick={() => props.handleClick(props._id)}>
            {props.buttonText}
        </button>
    </li>
)

export default Article;