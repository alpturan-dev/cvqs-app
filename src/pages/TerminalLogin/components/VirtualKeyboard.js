import React, { useRef, useState, useContext } from "react";
import ReactDOM from "react-dom";
import Keyboard from "react-simple-keyboard";
import ShiftContext from "../../../context/ShiftContext";
import "react-simple-keyboard/build/css/index.css";
import { useFormikContext } from "formik";

function VirtualKeyboard({ field, keyboard }) {
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
        // if (button === "{shift}" || button === "{lock}") handleShift();
    };

    const { setSicilNo, setPassword, setMontajNo } = useContext(ShiftContext)

    const { setFieldValue } = useFormikContext();

    function onKeyboardChange(input) {
        if (field === "sicilNo") {
            setSicilNo(input);
            setFieldValue('sicilNo', input)
        } else if (field === "password") {
            setPassword(input)
            setFieldValue('password', input)
        } else if (field === "montajNo") {
            setMontajNo(input)
            setFieldValue('montajNo', input)
        }
    };

    return (
        <>
            <Keyboard
                keyboardRef={r => (keyboard.current = r)}
                inputName={field}
                layoutName={layout}
                onChange={onKeyboardChange}
            />
        </>
    );
}

export default VirtualKeyboard


