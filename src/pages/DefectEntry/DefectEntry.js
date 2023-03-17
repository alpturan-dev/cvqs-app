import { useEffect, useContext, useState } from "react"
import { useParams, useLocation } from "react-router-dom";
import { Box, Container, Typography, Checkbox, FormControlLabel, TextField } from "@mui/material"
import ShiftContext from "../../context/ShiftContext";
import TerminalContext from "../../context/TerminalContext"
import DefectContext from "../../context/DefectContext"
import DefectEntryButton from "../../components/CustomButton";
import DefectModal from './components/DefectModal'
import DefectImage from "./components/DefectImage"
import BottomSection from "./components/BottomSection";
import SideSection from "./components/SideSection";
import TopSection from "./components/TopSection";
import toast, { Toaster } from 'react-hot-toast';
import { slide as Menu } from 'react-burger-menu'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import warning from '../../assets/warning-audio.mp3'
import LargeFont from "./components/LargeFont";
import { useTranslation } from "react-i18next";

function DefectEntry() {

    const { t } = useTranslation();

    let { depCode, termName } = useParams();

    const { state } = useLocation();

    const { terminalDefects, getTerminalDefects, defectPageHeader, getDefectPageHeader } = useContext(TerminalContext);

    const { colors } = useContext(ShiftContext);

    const { selectedDefectPart, largeFont, setLargeFont, active, remaining, getRemainingTime, setRemaining } = useContext(DefectContext)
    useEffect(() => {
        const interval = setInterval(() => {
            setRemaining(Math.ceil(getRemainingTime() / 1000))
        }, 500)

        return () => {
            clearInterval(interval)
        }
    }, [active, remaining])
    useEffect(() => {
        toast.success(t('loginSuccess'))
        console.log("Login Form Data", state)
        getTerminalDefects(depCode, termName)
        getDefectPageHeader(depCode, termName)
    }, [])

    var styles = {
        bmBurgerButton: {
            position: 'absolute',
            width: '40px',
            height: '40px',
            right: '1%',
            top: '50%'
        },
        bmBurgerBars: {
            background: '#373a47'
        },
        bmBurgerBarsHover: {
            background: '#a90000'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: '#bdc3c7'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%'
        },
        bmMenu: {
            background: '#eee',
            padding: '20px 10px',
            border: "2px solid #ddd",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmItemList: {
            width: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px"
        },
        bmItem: {
            display: 'flex'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        }
    }
    return (
        <Box sx={{ backgroundColor: !active && "red", height: "100vh" }}>
            <Container
                disableGutters
                maxWidth="lg"
                sx={{
                    paddingTop: "10px",
                    height: "95vh",
                    display: "flex",
                }}>
                <Toaster />
                {!active && (
                    <audio style={{ display: "none" }} controls autoPlay>
                        <source src={warning} type="audio/mpeg" />
                    </audio>
                )}
                <Box sx={{
                    width: "100%",
                    border: "2px solid #ddd",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: "#eee",
                    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px"
                }}>
                    <DefectModal depCode={depCode} termName={termName} loginData={state} />
                    <Box
                        sx={{
                            padding: { lg: "0px 10px" },
                            width: { xs: "100%", sm: "100%", md: "100%", lg: largeFont ? "100%" : "80%" },
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        {largeFont ? (
                            <LargeFont depCode={depCode} termName={termName} defectPageHeader={defectPageHeader} colors={colors} state={state} />
                        ) : (
                            <>
                                <TopSection defectPageHeader={defectPageHeader} colors={colors} state={state} />
                                <DefectImage terminalDefects={terminalDefects} depCode={depCode} termName={termName} />
                                <BottomSection />
                            </>
                        )}

                    </Box>
                    {!largeFont && (
                        <>
                            <Box
                                sx={{
                                    display: { xs: "flex", sm: "flex", md: "flex", lg: "none" },
                                }}>
                                <Menu right width={300} customBurgerIcon={<ArrowBackIosNewIcon />} styles={styles}>
                                    <SideSection defectPageHeader={defectPageHeader} selectedDefectPart={selectedDefectPart} />
                                </Menu>
                            </Box>
                            <Box
                                sx={{
                                    width: "20%",
                                    backgroundColor: "#eee",
                                    padding: "15px 15px",
                                    display: { xs: "none", sm: "none", md: "none", lg: "flex" },
                                    gap: "20px",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}>
                                <SideSection defectPageHeader={defectPageHeader} selectedDefectPart={selectedDefectPart} />
                            </Box>
                        </>
                    )}

                </Box>
            </Container>
        </Box>
    )
}
export default DefectEntry