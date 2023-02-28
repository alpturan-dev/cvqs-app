import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {BrowserRouter} from "react-router-dom";
import {TerminalProvider} from "./context/TerminalContext";

const theme = createTheme({
    palette: {
        primary: {
            main: "#dee2e6",
            red: "#d00000"
        },
        secondary: {
            main: '#343a40'
        },
    },
    typography: {
        fontFamily: `'Poppins', sans-serif`
    }
});
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <TerminalProvider>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    </TerminalProvider>
);
