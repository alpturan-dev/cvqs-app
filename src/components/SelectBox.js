import * as React from 'react';
import { useState, useContext } from 'react';
import { Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { BootstrapInput } from '../pages/DefectEntry/components/BootstrapInput';
import DefectContext from '../context/DefectContext';
import ShiftContext from '../context/ShiftContext';
import TerminalContext from '../context/TerminalContext';
import KeyboardContext from '../context/KeyboardContext';
import { useFormikContext } from 'formik';
import ModalContext from '../context/ModalContext';

function ModalSelect({ visible, context, name, inputLabel, categories }) {

    const {
        modalForm,
        setModalForm
    } = useContext(ModalContext)

    const { selectedTerminal, setSelectedTerminal } = useContext(TerminalContext);

    const { selectedColor, setSelectedColor, loginForm, setLoginForm } = useContext(ShiftContext)

    const { selectedDefectPart, setSelectedDefectPart } = useContext(DefectContext)

    const { field, setField, handleField } = useContext(KeyboardContext);

    const { setFieldValue } = useFormikContext();

    const [selected, setSelected] = useState("");

    const handleChange = (e) => {
        if (context === "modal") {
            setSelected(e.target.value)
            setFieldValue(field, e.target.value)
            setModalForm({ ...modalForm, [field]: e.target.value })
        } else if (context === "shift") {
            let color = categories.filter(color => color.code === e.target.value)[0]
            // console.log("shift id", e)
            setSelectedColor(color)
            setFieldValue(field, color.name)
            setLoginForm({
                ...loginForm, field: color.name
            })
        } else if (context === "terminal") {
            setSelected(e.target.value)
            setFieldValue("terminal", e.target.value)
            setSelectedTerminal(e.target.value)
        } else if (context === "defect") {
            let filtered = categories.filter((defect, index) => index === 0 && defect)[0]
            setSelectedDefectPart({ defectName: filtered.defectName })
        }
    }

    return (
        <>
            <Typography>{inputLabel && inputLabel}</Typography>
            <FormControl fullWidth variant="filled" sx={context === "defect" ? { position: "absolute", top: "0", left: "0", display: visible ? "block" : "none" } : { width: 200, color: "white" }}>
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
                    sx={{
                        border: "2px solid #eee", borderRadius: "5px", '& .MuiInputBase-input': {
                            backgroundColor: "#ddd"
                        },
                    }}

                    id={name}
                    value={name === "shift" ? selectedColor.code : selected}
                    onFocus={handleField}
                    onChange={handleChange}
                    color="secondary"
                    input={<BootstrapInput />}
                >
                    {categories.map((item, index) => {
                        if (inputLabel === "Vardiya") {
                            return (<MenuItem value={item.code} name={item.name} key={index}>{item.code}</MenuItem>)
                        } else if (inputLabel === "NR Combobox") {
                            return (<MenuItem value={item.nrReasonAbb} key={index}>{item.nrReasonAbb}</MenuItem>)
                        } else if (inputLabel === "Terminal") {
                            return (<MenuItem value={item.termName} key={index}>{item.termName}</MenuItem>)
                        } else if (context === "defect") {
                            return (<MenuItem value={item.defectName} key={index}>{item.defectName}</MenuItem>)
                        } else {
                            return (
                                <MenuItem value={item.dataValue} key={index}>{item.dataValue}</MenuItem>
                            )
                        }
                    })}
                </Select>
            </FormControl>
        </>
    );
}

export default ModalSelect