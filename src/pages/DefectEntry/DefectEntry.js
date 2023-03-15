import { Box, Container, Typography, Checkbox, FormControlLabel, TextField } from "@mui/material"
import { useEffect, useContext } from "react"
import { useParams, useLocation } from "react-router-dom";
import ShiftContext from "../../context/ShiftContext";
import TerminalContext from "../../context/TerminalContext"
import DefectContext from "../../context/TerminalContext"
import DefectEntryButton from "../../components/CustomButton";
import DefectModal from './components/DefectModal'
import DefectImage from "./components/DefectImage"
import BottomSection from "./components/BottomSection";
import SideSection from "./components/SideSection";
import TopSection from "./components/TopSection";
import toast, { Toaster } from 'react-hot-toast';

function DefectEntry() {

    let { depCode, termName } = useParams();

    const { state } = useLocation();

    const { terminalDefects, getTerminalDefects, defectPageHeader, getDefectPageHeader } = useContext(TerminalContext);

    const { colors } = useContext(ShiftContext);

    const { selectedDefectPart } = useContext(DefectContext)


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
                    padding: "20px 0",
                    height: "100vh",
                    display: "flex",
                }}>
                <Toaster />
                <Box sx={{
                    width: "100%",
                    border: "2px solid #ddd",
                    borderRadius: "10px",
                    display: "flex",
                    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px"
                }}>
                    <DefectModal depCode={depCode} termName={termName} loginData={state} />
                    <Box
                        sx={{
                            padding: "0px 10px",
                            width: "80%",
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "#eee",
                        }}
                    >
                        <TopSection defectPageHeader={defectPageHeader} colors={colors} state={state} />
                        <DefectImage terminalDefects={terminalDefects} depCode={depCode} termName={termName} />
                        <BottomSection />
                    </Box>
                    <SideSection defectPageHeader={defectPageHeader} selectedDefectPart={selectedDefectPart} />
                </Box>
            </Container>
        </>
    )
}
export default DefectEntry