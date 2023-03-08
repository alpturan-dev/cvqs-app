import { useState, createContext } from "react";

const DefectContext = createContext();

export const DefectProvider = ({ children }) => {

    const [selectedDefectPart, setSelectedDefectPart] = useState({ defectName: "" });

    const defectdata = {
        selectedDefectPart,
        setSelectedDefectPart
    }

    return <DefectContext.Provider value={defectdata}>{children}</DefectContext.Provider>
}
export default DefectContext