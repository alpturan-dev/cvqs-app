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

    const [loginForm, setLoginForm] = useState({
        registrationNo: "",
        password: "",
        assemblyNo: "",
        date: dayjs(new Date()),
        shift: colors[0].name
    })

    const shiftdata = {
        colors,
        selectedColor,
        setSelectedColor,
        background,
        setBackground,
        loginForm,
        setLoginForm
    }

    return <ShiftContext.Provider value={shiftdata}>{children}</ShiftContext.Provider>
}

export default ShiftContext
