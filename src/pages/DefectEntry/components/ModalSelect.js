import * as React from 'react';
import { useState, useContext } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { BootstrapInput } from './BootstrapInput';
import DefectContext from '../../../context/DefectContext';
import { useFormikContext } from 'formik';
import ModalContext from '../../../context/ModalContext';

function ModalSelect({ field, inputLabel, categories }) {

    const { modalData,
        setModalData,
        defectResponsible,
        setDefectResponsible,
        defectClass,
        setDefectClass,
        exitDepartment,
        setExitDepartment,
        repairType,
        setRepairType,
        description,
        setDescription,
        actionTaken,
        setActionTaken,
        nrComboBox,
        setNrComboBox } = useContext(ModalContext)

    const { setFieldValue } = useFormikContext();

    const [selected, setSelected] = useState("");

    const handleChange = (e) => {
        switch (field) {
            case "defectResponsible":
                setSelected(e.target.value)
                setFieldValue("defectResponsible", e.target.value)
                setDefectResponsible(e.target.value)
                break;
            case "defectClass":
                setSelected(e.target.value)
                setFieldValue("defectClass", e.target.value)
                setDefectClass(e.target.value)
                break;
            case "exitDepartment":
                setSelected(e.target.value)
                setFieldValue("exitDepartment", e.target.value)
                setExitDepartment(e.target.value)
                break;
            case "repairType":
                setSelected(e.target.value)
                setFieldValue("repairType", e.target.value)
                setRepairType(e.target.value)
                break;
            case "nrComboBox":
                setSelected(e.target.value)
                console.log("combo girdim", e.target)
                setFieldValue("nrComboBox", e.target.value)
                setNrComboBox(e.target.value)
                break;
            default:
                break;
        }
    }

    return (
        <FormControl fullWidth variant="filled" sx={{ width: 200 }}>
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
                sx={{ border: "2px solid #eee", borderRadius: "5px" }}
                value={selected}
                onChange={handleChange}
                color="secondary"
                input={<BootstrapInput />}
            >
                {categories.map((item, index) => (
                    inputLabel === "NR Combobox" ? (
                        <MenuItem value={item.nrReasonAbb} key={index}>{item.nrReasonAbb}</MenuItem>
                    ) : (
                        <MenuItem value={item.dataValue} key={index}>{item.dataValue}</MenuItem>
                    )
                ))}
            </Select>
        </FormControl>
    );
}

export default ModalSelect