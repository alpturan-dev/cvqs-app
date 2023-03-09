import React from 'react'
import { Box } from '@mui/material'
import DefectEntryButton from '../../../components/CustomButton'

function BottomSection() {
    return (
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
    )
}

export default BottomSection