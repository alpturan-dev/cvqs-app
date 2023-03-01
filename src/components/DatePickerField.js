import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Typography } from "@mui/material";

function DatePickerField() {
    const [value, setValue] = React.useState(dayjs(new Date()).format('DD/MM/YYYY'));

    return (
        <>
            <Typography>Tarih</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    disableFuture
                    label="Tarih"
                    openTo="year"
                    views={['year', 'month', 'day']}
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} sx={{
                        color: "#eee",
                    }}
                    />}
                />
            </LocalizationProvider>
        </>
    );
}

export default DatePickerField