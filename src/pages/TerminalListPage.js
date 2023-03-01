import {useEffect} from "react";
import Navbar from "../components/Navbar";
import {Box} from '@mui/material'
import TerminalTable from "../components/TerminalTable";
import {useContext} from 'react';
import TerminalContext from "../context/TerminalContext";

function TerminalListPage() {
    const {terminalList, getTerminals} = useContext(TerminalContext);

    useEffect(() => {
        getTerminals();
    }, [])

    return (
        <>
            <Navbar/>
            <Box sx={{backgroundColor: "primary.main", padding: "20px 50px"}}>
                <TerminalTable terminals={terminalList}/>
            </Box>
        </>
    );
}

export default TerminalListPage