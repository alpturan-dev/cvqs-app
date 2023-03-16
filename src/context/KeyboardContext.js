import { useState, createContext } from "react";

const KeyboardContext = createContext();

export const KeyboardProvider = ({ children }) => {

    const [field, setField] = useState("");

    const handleField = (event) => {
        console.log(event.target.id)
        setField(event?.target?.id)
    }

    const keyboardData = {
        field,
        setField,
        handleField
    }

    return <KeyboardContext.Provider value={keyboardData}>{children}</KeyboardContext.Provider>
}

export default KeyboardContext