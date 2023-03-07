import { Box, Typography } from '@mui/material'
import { useState, useContext, useEffect } from 'react'
import TerminalContext from '../context/TerminalContext';

function DefectImage({ terminalDefects, depCode, termName }) {

    const { defectInnerPageData, getDefectInnerPageData } = useContext(TerminalContext)

    useEffect(() => {
        getDefectInnerPageData(depCode, termName);
    }, [])

    const [innerScreen, setInnerScreen] = useState(false);

    const [imageURL, setImageURL] = useState("https://ikinciyeniblogfles.blob.core.windows.net/images/3e9cd9c7-0995-4859-90c9-1015f75cf686.jpg");

    const handleInnerImage = (childPicID) => {
        //childPicId'ye gore image degistirilebilir.
        if (childPicID === 87897) {
            //A/C icin dummy foto
            setImageURL("https://i.ytimg.com/vi/NgyniN9ME4A/maxresdefault.jpg")
            setInnerScreen(true)
        }
    }

    return (
        <>
            {innerScreen ?
                <Box sx={{ height: "76%", border: "1px solid gray", position: "relative", backgroundImage: `url(${imageURL})` }}>
                    {defectInnerPageData.defectButtonRecords.map((defect) => {
                        return (
                            (
                                <Box
                                    onClick={() => handleInnerImage(defect.childPicID)}
                                    sx={{
                                        cursor: "pointer",
                                        position: "absolute",
                                        width: defect.boxWidth - 8,
                                        height: defect.boxHeight - 8,
                                        left: defect.boxX,
                                        top: defect.boxY,
                                        border: "6px solid",
                                        borderColor: defect.boxColor,
                                        borderRadius: "5px",
                                        fontSize: "1rem",
                                        fontWeight: "bolder",
                                    }}>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            backgroundColor: "white",
                                            color: defect.labelColor
                                        }}
                                    >
                                        {defect.labelText}
                                    </Typography>
                                </Box>
                            )
                        )
                    })}
                </Box> :
                (
                    <Box sx={{ height: "76%", border: "1px solid gray", position: "relative", backgroundImage: `url(${imageURL})` }}>
                        {terminalDefects.map((defect) => {
                            return (
                                (
                                    <Box
                                        onClick={() => handleInnerImage(defect.childPicID)}
                                        sx={{
                                            cursor: "pointer",
                                            position: "absolute",
                                            width: defect.boxWidth - 8,
                                            height: defect.boxHeight - 8,
                                            left: defect.boxX,
                                            top: defect.boxY,
                                            border: "6px solid",
                                            borderColor: defect.boxColor,
                                            borderRadius: "5px",
                                            fontSize: "1rem",
                                            fontWeight: "bolder",
                                        }}>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                backgroundColor: "white",
                                                color: defect.labelColor
                                            }}
                                        >
                                            {defect.labelText}
                                        </Typography>
                                    </Box>
                                )
                            )
                        })}
                    </Box>
                )}
        </>
    )
}

export default DefectImage