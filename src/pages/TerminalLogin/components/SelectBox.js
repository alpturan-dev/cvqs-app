import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useContext, useEffect } from "react";
import TerminalContext from '../../../context/TerminalContext';
import { useFormikContext } from "formik";

function SelectBox({ inputLabel, categories }) {

    const { selectedTerminal, setSelectedTerminal } = useContext(TerminalContext);

    const { setFieldValue } = useFormikContext();

    const handleChange = (e) => {
        setFieldValue("terminal", e.target.value)
        setSelectedTerminal(e.target.value)
    }


    return (
        <div>
            <FormControl variant="filled" sx={{ minWidth: 200, color: "white" }}>
                <InputLabel id="demo-simple-select-standard-label">{inputLabel}</InputLabel>
                <Select
                    MenuProps={{
                        PaperProps: {
                            onScroll: (event) => {
                                // console.log("we scroll");
                                // console.log(event);
                                // if (event.target.scrollTop === event.target.scrollHeight) {
                                //   setCategoryNamePagination(categoryNamePagination + 1);
                                // }
                            }
                        }
                    }}
                    value={selectedTerminal}
                    onChange={handleChange}
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