import { useState, createContext } from "react";
import axios from "axios";

const DefectContext = createContext();

export const DefectProvider = ({ children }) => {

    const [selectedDefectPart, setSelectedDefectPart] = useState({ defectName: "" });

    const [defectList, setDefectList] = useState([]);

    async function getDefectList(depCode, termName) {
        try {
            await axios.get(`/terminal/defcorrect/${depCode}/${termName}`)
                .then(res => {
                    const response = res.data;
                    setDefectList(response.data[0].defectList)
                });
        } catch (error) {
            console.error(error);
        }
    }

    const defectdata = {
        selectedDefectPart,
        setSelectedDefectPart,
        defectList,
        setDefectList,
        getDefectList
    }

    return <DefectContext.Provider value={defectdata}>{children}</DefectContext.Provider>
}
export default DefectContext