import React, { useRef, useState, useContext } from "react";
import ReactDOM from "react-dom";
import Keyboard from "react-simple-keyboard";
import ShiftContext from "../context/ShiftContext";
import "react-simple-keyboard/build/css/index.css";
import { useFormikContext } from "formik";
import ModalContext from "../context/ModalContext";

function VirtualKeyboard({ field, keyboard }) {
    const [layout, setLayout] = useState("default");

    // const handleShift = () => {
    //     const newLayoutName = layout === "default" ? "shift" : "default";
    //     setLayout(newLayoutName);
    // };

    // const onKeyPress = button => {
    //     console.log("Button pressed", button);

    //     // /**
    //     //  * If you want to handle the shift and caps lock buttons
    //     //  */
    //     // // if (button === "{shift}" || button === "{lock}") handleShift();
    // };

    const { loginForm, setLoginForm } = useContext(ShiftContext)

    const { modalForm, setModalForm } = useContext(ModalContext)

    const { setFieldValue } = useFormikContext();

    function onKeyboardChange(input) {
        if (field === "registrationNo" || field === "password" || field === "assemblyNo") {
            setLoginForm({ ...loginForm, [field]: input })
            setFieldValue(field, input)
        } else if (field === "description" || field === "actionTaken") {
            setModalForm({ ...modalForm, [field]: input })
            setFieldValue(field, input)
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


