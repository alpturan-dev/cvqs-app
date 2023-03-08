import * as React from 'react';
import { useState, useContext } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import DefectContext from '../../../context/DefectContext';

function DefectDropdown({ visible, inputLabel, categories }) {

    const { selectedDefectPart, setSelectedDefectPart } = useContext(DefectContext)

    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        '& .MuiInputBase-input': {
            width: "100%",
            height: "100%",
            borderRadius: 4,
            position: 'relative',
            top: "0",
            left: "0",
            backgroundColor: theme.palette.background.paper,
            fontSize: 16,
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            '&:focus': {
                borderRadius: 4,
                borderColor: '#80bdff',
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            },
        },
    }));

    React.useEffect(() => {
        let filtered = categories.filter((defect, index) => index === 0 && defect)[0]
        setSelectedDefectPart({ defectName: filtered.defectName })
    }, [])

    const handleChange = (e) => {
        setSelectedDefectPart({ defectName: e.target.value })
    }

    return (
        <FormControl fullWidth variant="filled" sx={{ position: "absolute", top: "0", left: "0", display: visible ? "block" : "none" }}>
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
                value={selectedDefectPart.defectName}
                onChange={handleChange}
                color="secondary"
                input={<BootstrapInput />}
            >
                {categories.map((defect, index) => (
                    <MenuItem value={defect.defectName} key={index}>{defect.defectName}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default DefectDropdown