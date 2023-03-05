import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext, useEffect } from "react";
import ShiftContext from "../context/ShiftContext";
import { Typography } from "@mui/material";
import { useFormikContext } from 'formik';
function ShiftSelect() {
    const colors = ['M', 'K', 'B']

    const { selectedColor, setSelectedColor, setShift } = useContext(ShiftContext)

    const { setFieldValue } = useFormikContext();

    const handleChange = (e) => {
        setSelectedColor(e.target.value)
    }

    //Warning
    useEffect(() => {
        setShift((function () {
            if (selectedColor === 'M') {
                setFieldValue("shift", "Mavi")
            } else if (selectedColor === 'K') {
                setFieldValue("shift", "Kırmızı")
            } else if (selectedColor === 'B') {
                setFieldValue("shift", "Beyaz")
            }
        }))
    }, [selectedColor])

    return (
        <>
            <Typography>Vardiya</Typography>
            <FormControl variant="filled" sx={{ minWidth: 200 }}>
                <InputLabel>Vardiya</InputLabel>
                <Select
                    value={selectedColor}
                    onChange={handleChange}
                >
                    {colors.map((color, index) => (
                        <MenuItem value={color} key={index}>{color}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
}

export default ShiftSelect