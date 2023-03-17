import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import DefectEntryButton from '../../../components/CustomButton'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslation } from 'react-i18next';

function StickyFooter({ defectList }) {

    const { t } = useTranslation();

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
                            {t('assemblyNo')}
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                fontWeight: "bolder"
                            }}>
                            {t('bodyNo')}
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
                        <DefectEntryButton label={t('search')}
                        />
                        <DefectEntryButton label={t('search')}
                        />
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
                    <DefectEntryButton label={t('vehicleList')} />
                    <DefectEntryButton label={t('manuelDefect')} />
                    <DefectEntryButton label={t('multipleDefect')} />
                    <DefectEntryButton label={t('defectList')} />
                    <DefectEntryButton label={t('defectCopy')} />
                    <DefectEntryButton label={t('exit')} />
                    <Typography sx={{ width: "100%", textAlign: "center" }}>{t('totalRows')} {defectList?.length}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default StickyFooter