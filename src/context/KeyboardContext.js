import { useState, createContext } from "react";

const KeyboardContext = createContext();

export const KeyboardProvider = ({ children }) => {

    const [field, setField] = useState("");

    const keyboardData = {
        field,
        setField
    }

    return <KeyboardContext.Provider value={keyboardData}>{children}</KeyboardContext.Provider>
}

export default KeyboardContext