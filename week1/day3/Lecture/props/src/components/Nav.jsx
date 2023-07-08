import React from "react";

// props is an object 
// Remember objects are made up of key value pairs
const Nav = (props) => {
    console.log(props);
    return (
        <nav>
            <h1>Hello {props.username} Your Favorite language is: {props.favLang} and your from: {props.hometown}</h1>
        </nav>
    )
}

export default Nav;

