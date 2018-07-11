import React from "react";

const Article = props => (
    <li class="list-group-item">
        <a href={props.url} target="_blank">{props.title}</a>
        <p>Published {props.date}</p>
        <button class={`btn btn-${props.buttonColor}`} onClick={() => props.handleClick(props._id)}>
            {props.buttonText}
        </button>
    </li>
)

export default Article;