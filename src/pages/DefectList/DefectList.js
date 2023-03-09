import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react'
import DefectContext from '../../context/DefectContext'
import DefectTable from './components/DefectTable'
import StickyFooter from './components/StickyFooter';
import { Box } from '@mui/material';
function DefectList() {

    let { depCode, termName } = useParams();

    const { defectList, getDefectList } = useContext(DefectContext);

    useEffect(() => {
        getDefectList(depCode, termName)
    }, [])

    return (
        <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <Box
                sx={{
                    width: "100%",
                    height: "90%"
                }}
            >
                <DefectTable defectList={defectList} />
            </Box>
            <Box
                sx={{
                    width: "100%",
                    height: "10%"
                }}
            >
                <StickyFooter defectList={defectList} />
            </Box>
        </Box>
    )
}

export default DefectList