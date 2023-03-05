import { useState, createContext } from "react";
import axios from "axios";

const TerminalContext = createContext();

export const TerminalProvider = ({ children }) => {

    const [terminalList, setTerminalList] = useState([]);

    async function getTerminals() {
        try {
            await axios.get('https://2911d4e0-a233-42d7-884b-89bd1e29adc3.mock.pstmn.io/terminals')
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
            await axios.get(`https://2911d4e0-a233-42d7-884b-89bd1e29adc3.mock.pstmn.io/terminals/${depCode}/${termName}`)
                .then(res => {
                    const response = res.data;
                    setFilteredTerminals(response.data)
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
        setSelectedTerminal
    }
    return <TerminalContext.Provider value={terminaldata}>{children}</TerminalContext.Provider>
}
export default TerminalContext