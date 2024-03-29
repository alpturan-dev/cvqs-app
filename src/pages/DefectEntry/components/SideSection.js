import React, { useContext } from 'react'
import DefectContext from '../../../context/DefectContext'
import { Box, Typography, FormControlLabel, Checkbox, TextField } from '@mui/material'
import DefectEntryButton from '../../../components/CustomButton'
import { useTranslation } from 'react-i18next'

function SideSection({ defectPageHeader }) {

    const { t } = useTranslation();

    const { defectSelected, selectedDefectPart } = useContext(DefectContext)

    return (
        <>
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
            <DefectEntryButton disabled="disabled" label={t('quickSave')} />
            <DefectEntryButton disabled="disabled" label={t('saveAndSkip')} />
            <DefectEntryButton type="defectModal" disabled={!defectSelected && "disabled"} label={t('defectLog')} />
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
                >
                    {t('assemblyNo').toUpperCase()}
                </Typography>
                <TextField
                    sx={{
                        width: "100%",
                    }}
                    autoComplete="off"
                // value={defectPageHeader.assyNo}
                />
            </Box>
            <DefectEntryButton label={t('search')} />
            <DefectEntryButton type="ilkresim" label={t('terminalFirstPicture')} />
            <DefectEntryButton label={t('commonDefect')} />
            <DefectEntryButton label={t('manifest')} />
            <Typography
                variant='h6'
                sx={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "flex-end",
                }}>
                {selectedDefectPart?.defectName}
            </Typography>
            <Typography
                variant='subtitle2'
                sx={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "flex-end",
                    color: "#C9464B"
                }}>
                {t('technicalSupport')} CVQS (TMMT)
            </Typography>
        </>
    )
}

export default SideSection