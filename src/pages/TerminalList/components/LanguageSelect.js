import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

export default function SelectSmall() {

    const { i18n } = useTranslation();

    const [language, setLanguage] = useState(i18n.resolvedLanguage);

    const languages = [
        { icon: "https://cdn.pixabay.com/photo/2021/07/30/12/07/flag-6509494__340.png", short: "tr", name: "Türkçe" },
        { icon: "https://img.freepik.com/premium-photo/raster-illustration-usa-flag_483040-7328.jpg?w=2000", short: "en", name: "English" }
    ];

    const handleChange = (event) => {
        setLanguage(event.target.value);
        i18n.changeLanguage(event.target.value)
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120, backgroundColor: "secondary.main", borderRadius: "3px" }} size="small">
            <Select
                value={language}
                label={language}
                onChange={handleChange}
                sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: "0" }, color: "white" }}
            >
                {languages.map((language, index) => (
                    <MenuItem key={index} value={language.short} sx={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
                        <Typography>
                            {language.name}
                        </Typography>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}