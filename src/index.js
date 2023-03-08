import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from "react-router-dom";
import { TerminalProvider } from "./context/TerminalContext";
import { ShiftProvider } from "./context/ShiftContext";
import { DefectProvider } from './context/DefectContext';

if (process.env.NODE_ENV === 'development') {
    require('./mocks/browser')
}

const theme = createTheme({
    palette: {
        primary: {
            main: "#e9ecef",
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
    <DefectProvider>
        <TerminalProvider>
            <ShiftProvider>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </ThemeProvider>
            </ShiftProvider>
        </TerminalProvider>
    </DefectProvider>
);
