import {useState, createContext} from "react";

const ShiftContext = createContext();

export const ShiftProvider = ({children}) => {
    const [selectedColor, setSelectedColor] = useState("M");
    const [background, setBackground] = useState('');
    const shiftdata = {
        selectedColor,
        setSelectedColor,
        background,
        setBackground
    }
    return <ShiftContext.Provider value={shiftdata}>{children}</ShiftContext.Provider>
}
export default ShiftContext