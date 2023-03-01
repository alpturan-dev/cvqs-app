import DatePickerField from "./DatePickerField";
import ShiftSelect from "./ShiftSelect";
import { Box } from "@mui/material";
import { useContext, useEffect } from 'react'
import ShiftContext from "../context/ShiftContext";

function ShiftBox() {

    const { selectedColor, background, setBackground } = useContext(ShiftContext);

    useEffect(() => {
        if (selectedColor === 'M') {
            setBackground("#457b9d")
        } else if (selectedColor === 'K') {
            setBackground("#d00000")
        } else if (selectedColor === 'S') {
            setBackground("#ffc300")
        }
    })

    return (
        <>
            <Box
                sx={{
                    width: "650px",
                    padding: "20px 20px",
                    borderRadius: "5px",
                    color: selectedColor !== 'S' && "#eee",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "40px",
                    backgroundColor: background
                }}>
                <DatePickerField />
                <ShiftSelect />
            </Box>
        </>
    )
}

export default ShiftBox