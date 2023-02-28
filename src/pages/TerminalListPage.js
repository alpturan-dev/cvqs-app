import {useEffect} from "react";
import Navbar from "../components/Navbar";
import {Box} from '@mui/material'
import TerminalTable from "../components/TerminalTable";
import {useContext} from 'react';
import TerminalContext from "../context/TerminalContext";

function TerminalListPage() {
    const {terminalList, getTerminals} = useContext(TerminalContext);
    // const [terminalList, setTerminalList] = useState([]);

    useEffect(() => {
        // async function getTerminalList() {
        //     try {
        //         await axios.get('https://0c769264-2601-4474-bcd6-641c8247d106.mock.pstmn.io/terminal-list')
        //             .then(res => {
        //                 const response = res.data;
        //                 setTerminalList(response.data)
        //                 console.log(response.data)
        //             });
        //     } catch (error) {
        //         console.error(error);
        //     }
        // }
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