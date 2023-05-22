import React, { useState } from "react";
import Button from "./components/Button.js";
import Title from "./Title.js";

const updateColor = (props) => {
const [color, changeColor] = useState("");

    return (
        <div className="App">
            <Title text='Changing colors' />
            <Button onClick={() => changeColor(randomColor())}>click me </Button>
            <Button onClick={() => changeColor(randomColor())}>click me </Button>
            <Button onClick={() => changeColor(randomColor())}>click me </Button> 
        </div>
    )
}
export default updateColor