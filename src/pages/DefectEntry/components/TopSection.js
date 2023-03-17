import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTranslation } from "react-i18next";

function TopSection({ defectPageHeader, colors, state }) {

    const { t } = useTranslation();

    return (
        <Box
            sx={{
                width: "100%",
                height: "12%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "100px"
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
                    {t('assemblyNo').toUpperCase()}
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
                    {t('bodyNo').toUpperCase()}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "bolder" }}>
                    {defectPageHeader.bodyNo}
                </Typography>
            </Box>
            <Typography variant="h5">
                {t('defectEntryScreen')}
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
                    {t('color')}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "bolder" }}>
                    {defectPageHeader.extCode}
                </Typography>
            </Box>
        </Box>
    )
}

export default TopSection