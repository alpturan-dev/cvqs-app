import { Box, Container, Typography } from "@mui/material"
import { useEffect, useContext } from "react"
import { useParams, useLocation } from "react-router-dom";
import ShiftContext from "../context/ShiftContext";
import TerminalContext from "../context/TerminalContext"

function DefectEntry() {

    let { depCode, termName } = useParams();

    const { state } = useLocation();

    const { terminalDefects, getTerminalDefects, defectPageHeader, getDefectPageHeader } = useContext(TerminalContext);

    const { colors } = useContext(ShiftContext);

    useEffect(() => {
        console.log("values", state.shift)
        getTerminalDefects(depCode, termName)
        getDefectPageHeader(depCode, termName)
    }, [])

    return (
        <Box sx={{ backgroundColor: "primary.main" }}>
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
                                backgroundColor: colors.filter(color => color.name === state.shift)[0].color,
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
        </Box>
    )
}
export default DefectEntry