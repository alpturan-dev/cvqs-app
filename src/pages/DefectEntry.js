import { Box, Container, Typography } from "@mui/material"
import { useEffect, useContext } from "react"
import { useParams, useLocation } from "react-router-dom";
import TerminalContext from "../context/TerminalContext"

function DefectEntry() {

    let { depCode, termName } = useParams();

    const { state } = useLocation();

    const { terminalDefects, getTerminalDefects, defectPageHeader, getDefectPageHeader } = useContext(TerminalContext);


    useEffect(() => {
        console.log("values", state)
        getTerminalDefects(depCode, termName)
        getDefectPageHeader(depCode, termName)
    }, [])

    return (
        <>
            <Container
                maxWidth="lg"
                sx={{
                    height: "100vh",
                    display: "flex",
                    backgroundColor: "#eee"
                }}>
                <Box
                    sx={{
                        padding: "0 20px",
                        width: "70%",
                        border: "1px solid gray",
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "white"
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            height: "20%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                            border: "1px solid gray",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                            <Typography variant="h6">
                                MONTAJ NO
                            </Typography>
                            <Typography variant="body1">
                                {defectPageHeader.assyNo}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                                justifyContent: "center",
                                alignItems: "center",
                                border: "1px solid gray",
                                borderRadius: "10px",
                                padding: "10px 20px",
                                backgroundColor: defectPageHeader.bgColor,
                                color: "white"
                            }}>
                            <Typography variant="h6">
                                BODY NO
                            </Typography>
                            <Typography variant="body1">
                                {defectPageHeader.bodyNo}
                            </Typography>
                        </Box>
                        <Typography variant="h5">
                            HATA GİRİŞ EKRANI
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                                justifyContent: "center",
                                alignItems: "center",
                                border: "1px solid gray",
                                borderRadius: "10px",
                                padding: "10px 20px",
                                backgroundColor: defectPageHeader.bgColor,
                                color: "white"
                            }}>
                            <Typography variant="h6">
                                RENK
                            </Typography>
                            <Typography variant="body1">
                                {defectPageHeader.extCode}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ height: "70%", border: "1px solid gray" }}>
                    </Box>
                    <Box sx={{ height: "20%", border: "1px solid gray" }}>
                        bottom
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: "30%",
                        display: "flex",
                        flexDirection: "column",
                        border: "1px solid gray",
                        backgroundColor: "white"
                    }}
                >
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