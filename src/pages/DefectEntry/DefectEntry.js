import { Box, Container, Typography, Checkbox, FormControlLabel, TextField } from "@mui/material"
import { useEffect, useContext } from "react"
import { useParams, useLocation } from "react-router-dom";
import ShiftContext from "../../context/ShiftContext";
import TerminalContext from "../../context/TerminalContext"
import DefectContext from "../../context/TerminalContext"
import DefectEntryButton from "./components/DefectEntryButton";
import DefectImage from "./components/DefectImage"

function DefectEntry() {

    let { depCode, termName } = useParams();

    const { state } = useLocation();

    const { terminalDefects, getTerminalDefects, defectPageHeader, getDefectPageHeader } = useContext(TerminalContext);

    const { colors } = useContext(ShiftContext);

    const { selectedDefectPart } = useContext(DefectContext)


    useEffect(() => {
        console.log("selectedDefect", selectedDefectPart)
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
                <Box sx={{
                    width: "100%",
                    border: "2px solid #ddd",
                    borderRadius: "10px",
                    display: "flex",
                    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px"
                }}>
                    <Box
                        sx={{
                            padding: "0px 10px",
                            width: "90%",
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "#eee",
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                height: "12%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-around",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>
                                <Typography variant="h6">
                                    MONTAJ NO
                                </Typography>
                                <Typography variant="body1" sx={{ fontWeight: "bolder" }}>
                                    {defectPageHeader.assyNo}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    border: "1px solid gray",
                                    borderRadius: "10px",
                                    padding: "10px 20px",
                                    backgroundColor: colors.filter(color => color.name === state.shift)[0].color
                                }}>
                                <Typography variant="h6">
                                    BODY NO
                                </Typography>
                                <Typography variant="body1" sx={{ fontWeight: "bolder" }}>
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
                                <Typography variant="body1" sx={{ fontWeight: "bolder" }}>
                                    {defectPageHeader.extCode}
                                </Typography>
                            </Box>
                        </Box>
                        <DefectImage terminalDefects={terminalDefects} depCode={depCode} termName={termName} />
                        <Box
                            sx={{
                                height: "12%",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                            }}
                        >
                            <DefectEntryButton label="ÇIKIŞ" />
                            <DefectEntryButton label="MODEL İLK RESMİ" />
                            <DefectEntryButton type="back" label="GERİ" />
                            <DefectEntryButton label="HATA LİSTESİ" />
                            <DefectEntryButton label="TEMİZLE" />
                            <DefectEntryButton label="BÜYÜK FONT" />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: "30%",
                            backgroundColor: "#eee",
                            padding: "15px 0",
                            display: "flex",
                            gap: "20px",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bolder",
                                color: "primary.red",
                                textDecoration: "underline",
                                textUnderlineOffset: "6px"
                            }}
                        >
                            {defectPageHeader.firstname} {defectPageHeader.lastname} ({defectPageHeader.departmentCode})
                        </Typography>
                        <Box sx={{ display: "flex", gap: "10px" }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px"
                                }}
                            >
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            sx={{
                                                color: "secondary.main",
                                                '&.Mui-checked': {
                                                    color: "primary.red",
                                                },
                                            }}
                                        />}
                                    label="Harigami"
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px"
                                }}
                            >
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            sx={{
                                                color: "secondary.main",
                                                '&.Mui-checked': {
                                                    color: "primary.red",
                                                },
                                            }}
                                        />}
                                    label="RDD"
                                />
                            </Box>
                        </Box>
                        <DefectEntryButton disabled="disabled" label="HIZLI KAYDET" />
                        <DefectEntryButton disabled="disabled" label="KAYDET VE GEÇ" />
                        <DefectEntryButton disabled="disabled" label="HATA KAYIT" />
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "5px"
                        }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: "bolder"
                                }}
                            >MONTAJ NO</Typography>
                            <TextField
                                sx={{
                                    width: "100%",
                                }}
                                autoComplete="off"
                                value={defectPageHeader.assyNo}
                            />
                        </Box>
                        <DefectEntryButton label="ARA" />
                        <DefectEntryButton type="ilkresim" label="TERMİNAL İLK RESMİ" />
                        <DefectEntryButton label="SIK GELEN HATA" />
                        <DefectEntryButton label="MANİFEST" />
                        <Typography
                            sx={{
                                cursor: "pointer",
                                display: "flex",
                                justifyContent: "flex-end",
                                color: "#C9464B"
                            }}>
                            {/* {selectedDefectPart.defectName} */}
                        </Typography>
                        <Typography
                            sx={{
                                cursor: "pointer",
                                display: "flex",
                                justifyContent: "flex-end",
                                color: "#C9464B"
                            }}>
                            Teknik Destek CVQS (TMMT)
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </>
    )
}
export default DefectEntry