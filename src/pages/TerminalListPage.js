import {useState, useEffect} from "react";
import axios from 'axios';
import Navbar from "../components/Navbar";
import {Box} from '@mui/material'
import TerminalTable from "../components/TerminalTable";

function TerminalListPage() {

    const [terminalList, setTerminalList] = useState([]);

    useEffect(() => {
        async function getTerminalList() {
            try {
                await axios.get('https://0c769264-2601-4474-bcd6-641c8247d106.mock.pstmn.io/terminal-list')
                    .then(res => {
                        const response = res.data;
                        setTerminalList(response.data)
                        console.log(response.data)
                    });
            } catch (error) {
                console.error(error);
            }
        }

        getTerminalList();

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