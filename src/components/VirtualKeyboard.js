import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import Keyboard from "react-simple-keyboard";

import "react-simple-keyboard/build/css/index.css";

function VirtualKeyboard({ field, onChange, keyboard }) {
    const [layout, setLayout] = useState("default");

    const handleShift = () => {
        const newLayoutName = layout === "default" ? "shift" : "default";
        setLayout(newLayoutName);
    };

    const onKeyPress = button => {
        console.log("Button pressed", button);
        /**
         * If you want to handle the shift and caps lock buttons
         */
        if (button === "{shift}" || button === "{lock}") handleShift();
    };

    return (
        <>
            <Keyboard
                keyboardRef={r => (keyboard.current = r)}
                inputName={field}
                layoutName={layout}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
        </>
    );
}

export default VirtualKeyboard


