import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import DefectEntryButton from '../../../components/CustomButton'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function StickyFooter({ defectList }) {
    return (
        <Box
            sx={{
                position: "absolute",
                bottom: "0",
                width: "100%",
                borderTop: "4px solid #eee"
            }}>
            <Box
                sx={{
                    padding: "20px 20px",
                    display: "flex",
                    gap: "10px",
                }}>
                <Box sx={{
                    width: "40%",
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: "35px",
                        }}>
                        <Typography
                            variant='h6'
                            sx={{
                                fontWeight: "bolder"
                            }}>
                            Montaj No
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                fontWeight: "bolder"
                            }}>
                            Body No
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            gap: "25px",

                        }}>
                        <TextField
                            sx={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
                        <TextField
                            sx={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            width: "20%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            gap: "15px",

                        }}>
                        <DefectEntryButton label="ARA" />
                        <DefectEntryButton label="ARA" />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            gap: "20px",

                        }}>
                        <Button
                            sx={{
                                padding: "20px 40px",
                                border: "1px solid",
                                backgroundColor: "primary.red",
                                '&:hover': {
                                    backgroundColor: "primary.red",
                                    opacity: "0.8"
                                }
                            }}
                        >
                            <KeyboardArrowUpIcon />
                        </Button>
                        <Button
                            sx={{
                                padding: "20px 40px",
                                border: "1px solid",
                                backgroundColor: "primary.red",
                                '&:hover': {
                                    backgroundColor: "primary.red",
                                    opacity: "0.8"
                                }
                            }}
                        >
                            <KeyboardArrowDownIcon />
                        </Button>
                    </Box>
                </Box>

                <Box sx={{
                    width: "60%",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                }}>
                    <DefectEntryButton label="ARAÇ LİSTESİ" />
                    <DefectEntryButton label="MANUEL HATA" />
                    <DefectEntryButton label="ÇOKLU HATA" />
                    <DefectEntryButton label="HATA LİSTESİ" />
                    <DefectEntryButton label="HATA KOPYA" />
                    <DefectEntryButton label="ÇIKIŞ" />
                    <Typography sx={{ width: "100%", textAlign: "center" }}>Total Rows {defectList?.length}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default StickyFooter