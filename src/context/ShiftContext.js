import { useState, createContext } from "react";
import dayjs from 'dayjs';

const ShiftContext = createContext();

export const ShiftProvider = ({ children }) => {
    const colors = [
        { name: "Mavi", color: "#457b9d", code: "M" },
        { name: "Kırmızı", color: "#d00000", code: "K" },
        { name: "Beyaz", color: "#fff", code: "B" }
    ]

    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [background, setBackground] = useState("");
    const [sicilNo, setSicilNo] = useState("");
    const [password, setPassword] = useState("");
    const [montajNo, setMontajNo] = useState("");
    const [field, setField] = useState("");
    const [date, setDate] = useState(dayjs(new Date()));
    const [shift, setShift] = useState(colors[0].name);
    const shiftdata = {
        colors,
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