import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext, useEffect } from "react";
import ShiftContext from "../../../context/ShiftContext";
import { Typography } from "@mui/material";
import { useFormikContext } from 'formik';
function ShiftSelect() {

    const { colors, selectedColor, setSelectedColor, setShift } = useContext(ShiftContext)

    const { setFieldValue } = useFormikContext();

    const handleChange = (e) => {
        let color = colors.filter(color => color.code === e.target.value)
        console.log("color", color[0])
        setSelectedColor(color[0])
    }

    //Warning
    useEffect(() => {
        setShift((function () {
            if (selectedColor.code === "M") {
                setFieldValue("shift", selectedColor.name)
            } else if (selectedColor.code === "K") {
                setFieldValue("shift", selectedColor.name)
            } else if (selectedColor.code === "B") {
                setFieldValue("shift", selectedColor.name)
            }
        }))
    }, [selectedColor])

    return (
        <>
            <Typography>Vardiya</Typography>
            <FormControl variant="filled" sx={{ minWidth: 200 }}>
                <InputLabel>Vardiya</InputLabel>
                <Select
                    value={selectedColor.code}
                    onChange={handleChange}
                >
                    {colors.map((color, index) => (
                        <MenuItem value={color.code} key={index}>{color.code}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
}

export default ShiftSelect