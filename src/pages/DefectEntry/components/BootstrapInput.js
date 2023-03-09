import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        padding: "10px 5px",
        borderRadius: 4,
        textIndent: "10px",
        backgroundColor: theme.palette.background.paper,
        fontSize: 18,
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));