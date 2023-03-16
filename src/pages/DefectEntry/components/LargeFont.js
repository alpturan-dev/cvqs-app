import React, { useContext, useEffect } from 'react'
import { Box, Typography, TextField } from '@mui/material'
import TopSection from './TopSection'
import DefectContext from '../../../context/DefectContext'
import CustomButton from '../../../components/CustomButton'

function LargeFont({ depCode, termName, defectPageHeader, colors, state }) {

    const { getLargeFontData, largeFontData, setLargeFontData, setLargeFont } = useContext(DefectContext)

    useEffect(() => {
        getLargeFontData(depCode, termName)
    }, [])

    return (
        <Box
            sx={{
                padding: "40px 0"
            }}>
            <Box sx={{ backgroundColor: "gray", color: "#eee", borderRadius: "5px" }}>
                <TopSection defectPageHeader={defectPageHeader} colors={colors} state={state} />
            </Box>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    marginTop: "20px",
                    backgroundColor: "#ddd",
                    alignItems: "center",
                    border: "2px solid gray",
                    borderRadius: "5px"
                }}>
                <Box
                    sx={{
                        width: "80%",
                        padding: "20px",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        gap: "50px",
                        borderRight: "2px solid gray",
                    }}
                >
                    <Box>
                        <Typography variant="h1">{largeFontData.model?.modelName} - {defectPageHeader.assyNo}</Typography>
                        <Typography variant="h1">{defectPageHeader.bodyNo}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
                        {largeFontData.defects?.map((defect, index) => (
                            <Typography variant="h4" key={index}>{defect.partName} - {defect.defectName}</Typography>
                        ))}
                    </Box>
                    {/* <pre>{JSON.stringify(largeFontData, null, 2)}</pre> */}
                </Box>
                <Box
                    sx={{
                        width: "20%",
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "40px",
                        textAlign: "center"
                    }}
                >
                    <CustomButton type="HATA GİRİŞ" label="HATA GİRİŞ" />
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
                        // value={defectPageHeader.assyNo}
                        />
                    </Box>
                    <CustomButton label="ARA" />
                </Box>
            </Box>
        </Box>

    )
}

export default LargeFont