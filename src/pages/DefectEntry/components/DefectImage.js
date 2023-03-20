import { Box, Typography } from '@mui/material'
import { useState, useContext, useEffect } from 'react'
import DefectSelect from './DefectSelect';
import TerminalContext from '../../../context/TerminalContext';
import cursor from '../../../assets/cursor.png'
import DefectContext from '../../../context/DefectContext';
import GetPosition from '../../../utils/GetPosition';
import Line from '../components/Line'
function DefectImage({ terminalDefects, depCode, termName }) {

    const { defectInnerPageData, getDefectInnerPageData } = useContext(TerminalContext)

    useEffect(() => {
        getDefectInnerPageData(depCode, termName);
    }, [])

    const { setDefectSelected, arrow, setArrow, innerScreen, image, handleInnerImage } = useContext(DefectContext)

    const [dropdown, setDropdown] = useState("")

    const handleDropdown = () => {
        setDropdown(!dropdown)
    }


    useEffect(() => {
        setDefectSelected(false);
    }, [])

    useEffect(() => {
        if (arrow.x !== null) {
            setDefectSelected(true);
        }
    }, [arrow])

    const handleArrow = (e) => {
        var parentPosition = GetPosition(e.currentTarget);
        var xPosition = e.clientX - parentPosition.x;
        var yPosition = e.clientY - parentPosition.y;
        setArrow({ x: xPosition, y: yPosition })
    }

    return (
        <>
            {innerScreen ?
                <Box onClick={(e) => handleArrow(e, e.clientX, e.clientY)} sx={{ width: "900px", height: "76%", border: "1px solid gray", position: "relative", backgroundImage: `url(${image})` }}>
                    {defectInnerPageData.defectButtonRecords.map((defect, index) => {
                        return (
                            (<Box key="index">
                                <Box
                                    onClick={handleDropdown}
                                    sx={{
                                        display: dropdown ? "none" : "block",
                                        cursor: "pointer",
                                        position: "relative",
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
                                <Box sx={{
                                    cursor: "pointer",
                                    position: "relative",
                                    left: defect.boxX,
                                    top: defect.boxY,
                                }}>
                                    <DefectSelect visible={dropdown} categories={defectInnerPageData.partDefects} />
                                </Box>
                                <Line boxX={defect.boxX} boxY={defect.boxY} x1={defect.lineX} y1={defect.lineY} />
                                <Box
                                    sx={{
                                        display: arrow.x !== null ? "block" : "none",
                                        position: "absolute",
                                        width: "60px",
                                        height: "60px",
                                        top: arrow.y - 4,
                                        left: arrow.x - 12
                                    }}>
                                    {<img src={cursor} alt='cursor' style={{ width: "100%", height: "100%" }} />}
                                </Box>
                            </Box>
                            )
                        )
                    })}
                </Box> :
                (
                    <Box sx={{ width: "900px", height: "76%", border: "1px solid gray", position: "relative", backgroundImage: `url(${image})` }}>
                        {terminalDefects.map((defect, index) => {
                            return (
                                <Box key={index}>
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
                                    <Line boxX={defect.boxX} boxY={defect.boxY} x1={defect.lineX} y1={defect.lineY} />
                                </Box>
                            )
                        })}
                    </Box>
                )
            }
        </>
    )
}

export default DefectImage