import { useState, createContext } from "react";
import axios from "axios";

const TerminalContext = createContext();

export const TerminalProvider = ({ children }) => {

    const MOCK_SERVER_URL = "https://621d0b75-23b1-4d4c-9d2b-543cacbfc839.mock.pstmn.io"

    const [terminalList, setTerminalList] = useState([]);

    async function getTerminals() {
        try {
            await axios.get(`${MOCK_SERVER_URL}/terminals`)
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
            await axios.get(`${MOCK_SERVER_URL}/terminal/${depCode}/${termName}`)
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
            await axios.get(`${MOCK_SERVER_URL}/terminal/defectentry/${depCode}/${termName}/3070725`)
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
                    setDefectPageHeader(response.data)
                });
        } catch (error) {
            console.error(error);
        }
    }

    const [selectedTerminal, setSelectedTerminal] = useState("");

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
        getDefectPageHeader
    }
    return <TerminalContext.Provider value={terminaldata}>{children}</TerminalContext.Provider>
}
export default TerminalContext