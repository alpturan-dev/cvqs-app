import React from 'react'
import { Box } from '@mui/material'
import DefectEntryButton from '../../../components/CustomButton'
import { useTranslation } from 'react-i18next'

function BottomSection() {

    const { t } = useTranslation();

    return (
        <Box
            sx={{
                height: "12%",
                display: "flex",
                alignItems: "center",
                gap: "10px",
            }}
        >
            <DefectEntryButton label={t('exit')} />
            <DefectEntryButton label={t('modelFirstPicture')} />
            <DefectEntryButton type="back" label={t('back')} />
            <DefectEntryButton type="defectList" label={t('defectList')} />
            <DefectEntryButton type="clear" label={t('clear')} />
            <DefectEntryButton type="largeFont" label={t('largeFont')} />
        </Box>
    )
}

export default BottomSection