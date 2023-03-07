import DatePickerField from "./DatePickerField";
import ShiftSelect from "./ShiftSelect";
import { Box } from "@mui/material";
import { useContext } from 'react'
import ShiftContext from "../context/ShiftContext";

function ShiftBox() {

    const { selectedColor } = useContext(ShiftContext);

    return (
        <>
            <Box
                sx={{
                    width: "600px",
                    padding: "20px 20px",
                    borderRadius: "5px",
                    color: selectedColor.code !== "B" && "#eee",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "40px",
                    backgroundColor: selectedColor.color
                }}>
                <DatePickerField />
                <ShiftSelect />
            </Box>
        </>
    )
}

export default ShiftBox