import { Box, Container } from "@mui/material"
import { useEffect, useContext } from "react"
import { useParams } from "react-router-dom";
import TerminalContext from "../context/TerminalContext"
function DefectEntry() {

    let { depCode, termName } = useParams();

    const { terminalDefects, getTerminalDefects, defectPageHeader, getDefectPageHeader } = useContext(TerminalContext);

    useEffect(() => {
        getTerminalDefects(depCode, termName)
        getDefectPageHeader(depCode, termName)
    }, [])

    return (
        <>
            <Container maxWidth="lg" sx={{ height: "100vh", display: "flex" }}>
                <Box
                    sx={{
                        padding: "10px 20px",
                        width: "70%",
                        border: "1px solid gray",
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <Box sx={{ height: "10%", border: "1px solid gray" }}>header</Box>
                    <Box sx={{ height: "70%", border: "1px solid gray" }}>
                    </Box>
                    <Box sx={{ height: "20%", border: "1px solid gray" }}>bottom</Box>
                </Box>
                <Box sx={{ width: "30%", display: "flex", flexDirection: "column", border: "1px solid gray" }}>
                    bla
                </Box>
            </Container>
            {/* {terminalDefects.map((defect) => (
                <div>{defect.labelText}</div>
            ))} */}
        </>
    )
}
export default DefectEntry