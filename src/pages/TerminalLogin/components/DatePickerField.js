import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Typography } from "@mui/material";
import { useFormikContext } from 'formik';
import { useContext } from 'react'
import ShiftContext from '../../../context/ShiftContext';

function DatePickerField() {

    const { date, setDate } = useContext(ShiftContext);

    const { setFieldValue } = useFormikContext();

    return (
        <Box
            sx={{
                width: "450px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "40px"
            }}>
            <Typography>Tarih</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    disableFuture
                    label="Tarih"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={date}
                    onChange={(newValue) => {
                        setFieldValue("date", newValue)
                        setDate(newValue);
                    }}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            variant="filled"
                        />}
                />
            </LocalizationProvider>
        </Box>
    );
}

export default DatePickerField
