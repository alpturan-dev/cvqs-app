import * as React from 'react';
import { useState, useContext } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { BootstrapInput } from './BootstrapInput';
import DefectContext from '../../../context/DefectContext';

function DefectSelect({ visible, categories }) {

    const { selectedDefectPart, setSelectedDefectPart } = useContext(DefectContext)

    React.useEffect(() => {
        let filtered = categories.filter((defect, index) => index === 0 && defect)[0]
        setSelectedDefectPart({ defectName: filtered.defectName })
    }, [])

    const handleChange = (e) => {
        setSelectedDefectPart({ defectName: e.target.value })
    }

    return (
        <FormControl fullWidth variant="filled" sx={{ position: "absolute", top: "0", left: "0", display: visible ? "block" : "none" }}>
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

export default DefectSelect