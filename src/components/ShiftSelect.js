import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useContext} from "react";
import ShiftContext from "../context/ShiftContext";
import {Typography} from "@mui/material";

function ShiftSelect() {
    const colors = ['M', 'K', 'S']

    const {selectedColor, setSelectedColor} = useContext(ShiftContext)

    const handleChange = (e) => {
        setSelectedColor(e.target.value)
    }

    return (
        <>
            <Typography>Vardiya</Typography>
            <FormControl variant="filled" sx={{minWidth: 200}}>
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