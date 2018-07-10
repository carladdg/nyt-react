import React from "react";

const Article = props => (
    <React.Fragment>
        <p>{props.title}</p>
        <button onClick={() => props.handleClick(props._id)}>
            {props.buttonText}
        </button>
    </React.Fragment>
)

export default Article;