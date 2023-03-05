import { useState, createContext } from "react";
import dayjs from 'dayjs';

const ShiftContext = createContext();

export const ShiftProvider = ({ children }) => {
    const [selectedColor, setSelectedColor] = useState("M");
    const [background, setBackground] = useState("");
    const [sicilNo, setSicilNo] = useState("");
    const [password, setPassword] = useState("");
    const [montajNo, setMontajNo] = useState("");
    const [field, setField] = useState("");
    const [date, setDate] = useState(dayjs(new Date()));
    const [shift, setShift] = useState("Mavi");
    const shiftdata = {
        selectedColor,
        setSelectedColor,
        background,
        setBackground,
        sicilNo,
        setSicilNo,
        password,
        setPassword,
        montajNo,
        setMontajNo,
        field,
        setField,
        date,
        setDate,
        shift,
        setShift
    }
    return <ShiftContext.Provider value={shiftdata}>{children}</ShiftContext.Provider>
}
export default ShiftContext