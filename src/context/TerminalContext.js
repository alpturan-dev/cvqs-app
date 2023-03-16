import { useState, createContext } from "react";
import axios from "axios";

const TerminalContext = createContext();

export const TerminalProvider = ({ children }) => {

    const [terminalList, setTerminalList] = useState([]);

    async function getTerminals() {
        try {
            await axios.get(`/terminals`)
                .then(res => {
                    const response = res.data;
                    setTerminalList(response.data)
                });
        } catch (error) {
            console.error(error);
        }
    }

    const [filteredTerminals, setFilteredTerminals] = useState([]);

    async function getFilteredTerminals(depCode, termName) {
        try {
            await axios.get(`/terminal/${depCode}/${termName}`)
                .then(res => {
                    const response = res.data;
                    setFilteredTerminals(response.data)
                });
        } catch (error) {
            console.error(error);
        }
    }

    const [terminalDefects, setTerminalDefects] = useState([]);

    async function getTerminalDefects(depCode, termName) {
        try {
            await axios.get(`/terminal/defectentry/${depCode}/${termName}/3070725`)
                .then(res => {
                    const response = res.data;
                    setTerminalDefects(response.data[0].defectButtonRecords)
                });
        } catch (error) {
            console.error(error);
        }
    }

    const [defectPageHeader, setDefectPageHeader] = useState([]);

    async function getDefectPageHeader(depCode, termName) {
        try {
            await axios.get(`/terminal/defectentry/${depCode}/${termName}/3070725/header`)
                .then(res => {
                    const response = res.data;
                    setDefectPageHeader(response.data[0])
                });
        } catch (error) {
            console.error(error);
        }
    }

    const [defectInnerPageData, setDefectInnerPageData] = useState(null);

    async function getDefectInnerPageData(depCode, termName) {
        try {
            await axios.get(`/terminal/defectentry/${depCode}/${termName}/3070725/87897`)
                .then(res => {
                    const response = res.data;
                    setDefectInnerPageData(response.data[0])
                });
        } catch (error) {
            console.error(error);
        }
    }

    const [selectedTerminal, setSelectedTerminal] = useState('');

    const terminaldata = {
        terminalList,
        setTerminalList,
        getTerminals,
        filteredTerminals,
        setFilteredTerminals,
        getFilteredTerminals,
        selectedTerminal,
        setSelectedTerminal,
        terminalDefects,
        setTerminalDefects,
        getTerminalDefects,
        defectPageHeader,
        setDefectPageHeader,
        getDefectPageHeader,
        defectInnerPageData,
        setDefectInnerPageData,
        getDefectInnerPageData
    }
    return <TerminalContext.Provider value={terminaldata}>{children}</TerminalContext.Provider>
}
export default TerminalContext