import DatePickerField from "./DatePickerField";
import { Box } from "@mui/material";
import { useContext } from 'react'
import ShiftContext from "../../../context/ShiftContext";
import SelectBox from "../../../components/SelectBox";

function ShiftBox() {

    const { colors, selectedColor, setSelectedColor, loginForm, setLoginForm } = useContext(ShiftContext);

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
                <SelectBox context="shift" name="shift" inputLabel="Vardiya" categories={colors} />
            </Box>
        </>
    )
}

export default ShiftBox