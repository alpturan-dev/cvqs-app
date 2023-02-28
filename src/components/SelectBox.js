import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from "react";

function SelectBox({categories}) {

    const [selected, setSelected] = useState("");

    const handleChange = (e) => {
        setSelected(e.target.value)
    }

    return (
        <div>
            <FormControl variant="filled" sx={{minWidth: 200}}>
                <InputLabel id="demo-simple-select-standard-label">Terminal</InputLabel>
                <Select
                    value={selected}
                    onChange={handleChange}
                    color="secondary"
                >
                    {categories.map((category, index) => (
                        <MenuItem value={category.termName} key={index}>{category.termName}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default SelectBox