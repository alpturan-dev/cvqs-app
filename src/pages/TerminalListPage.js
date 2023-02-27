import {useState, useEffect} from "react";
import axios from 'axios';

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
            <h1>Terminal List Page</h1>
            <div>
                {terminalList.map((terminal) => (
                    <div key={terminal.depName}>{terminal.depName}</div>
                ))}
            </div>
        </>
    );
}

export default TerminalListPage