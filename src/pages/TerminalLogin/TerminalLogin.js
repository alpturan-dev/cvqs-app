import React from 'react'
import { Box, TextField, Typography, Button } from '@mui/material'
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import TerminalContext from "../../context/TerminalContext";
import ShiftContext from '../../context/ShiftContext';
import { Formik } from 'formik';
import SelectBox from "./components/SelectBox";
import ShiftBox from "./components/ShiftBox";
import VirtualKeyboard from "../../components/VirtualKeyboard";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import KeyboardContext from '../../context/KeyboardContext';

function TerminalLoginPage() {

    let { depCode, termName } = useParams();
    const navigate = useNavigate();
    const handleDefectEntry = (depCode, termName, values) => {
        navigate(`/terminal/defectentry/${depCode}/${termName}/3070725`, { state: values });
    }
    const { filteredTerminals, getFilteredTerminals, selectedTerminal } = useContext(TerminalContext);
    const {
        sicilNo,
        setSicilNo,
        password,
        setPassword,
        montajNo,
        setMontajNo,
        date,
        shift,
    } = useContext(ShiftContext);

    const { field, setField } = useContext(KeyboardContext);

    useEffect(() => {
        getFilteredTerminals(depCode, termName);
    }, [])

    const handleField = (event) => {
        setField(event.target.id)
    }

    const keyboard = useRef();

    const onChangeField = event => {
        const input = event.target.value;
        if (event.target.id === "sicilNo") {
            setSicilNo(input);
        } else if (event.target.id === "password") {
            setPassword(input);
        } else if (event.target.id === "montajNo") {
            setMontajNo(input);
        }
        keyboard.current.setInput(input);
    };

    return (
        <Box sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: 'linear-gradient(to right bottom, #ddd, #dee2e6)',
        }}>
            <Box sx={{
                backgroundColor: "#eee",
                borderRadius: "10px",
                width: { xs: "95%", sm: "95%", md: "90%", lg: "60%" },
                padding: "20px 0 ",
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}>
                <Typography
                    variant="h5"
                    sx={{
                        marginY: "5px",
                        color: "secondary.main",
                        textAlign: "center",
                        textDecoration: "underline",
                        textUnderlineOffset: "6px"
                    }}
                >
                    CVQS (TMMT)
                </Typography>
                <Formik
                    initialValues={{
                        terminal: selectedTerminal,
                        sicilNo: sicilNo,
                        password: password,
                        montajNo: montajNo,
                        date: date,
                        shift: shift
                    }}
                    validate={values => {
                        const errors = {};
                        if (!values.sicilNo) {
                            errors.sicilNo = 'Bu alan boş bırakılamaz!';
                        } else if (
                            !/^[0-9]*$/i.test(values.sicilNo)
                        ) {
                            errors.sicilNo = 'Geçersiz Sicil No!';
                        }
                        if (!values.password) {
                            errors.password = 'Bu alan boş bırakılamaz!';
                        } else if (
                            !/^[0-9]*$/i.test(values.password)
                        ) {
                            errors.password = 'Geçersiz Şifre!';
                        }
                        if (!values.montajNo) {
                            errors.montajNo = 'Bu alan boş bırakılamaz!';
                        } else if (
                            !/^[0-9]*$/i.test(values.montajNo)
                        ) {
                            errors.montajNo = 'Geçersiz Montaj No!';
                        }
                        return errors;
                    }}
                    onSubmit={(values) => {
                        setTimeout(() => {
                            // setSelectedTerminal(values.selectedTerminal)
                            // setSicilNo(values.sicilNo)
                            // setPassword(values.password)
                            // setMontajNo(values.montajNo)
                            // setDate(values.date)
                            // setShift(values.shift) 
                            handleDefectEntry(depCode, termName, values);
                        }, 600);
                    }}
                >
                    {props => (
                        <form
                            onSubmit={props.handleSubmit}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "10px",
                                margin: "20px auto"
                            }}
                        >
                            <SelectBox
                                inputLabel='Terminal'
                                categories={filteredTerminals}
                            />
                            <Box sx={{
                                width: "450px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "20px"
                            }}>
                                <Typography>Sicil No</Typography>
                                <TextField
                                    sx={{ minWidth: "200px" }}
                                    onFocus={handleField}
                                    label="Sicil No"
                                    variant="filled"
                                    id="sicilNo"
                                    name="sicilNo"
                                    autoComplete="off"
                                    value={sicilNo}
                                    onBlur={props.handleBlur}
                                    onChange={(e) => {
                                        onChangeField(e)
                                        props.handleChange(e);
                                    }}
                                    error={props.errors.sicilNo && props.touched.sicilNo && true}
                                    helperText={props.errors.sicilNo && props.touched.sicilNo && props.errors.sicilNo}
                                />
                            </Box>
                            <Box sx={{
                                width: "450px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "20px"
                            }}>
                                <Typography>Şifre</Typography>
                                <TextField
                                    sx={{ minWidth: "200px" }}
                                    onFocus={handleField}
                                    variant="filled"
                                    type="password"
                                    name="password"
                                    id="password"
                                    autoComplete=''
                                    value={password}
                                    onChange={(e) => {
                                        onChangeField(e)
                                        props.handleChange(e);
                                    }}
                                    onBlur={props.handleBlur}
                                    error={props.errors.password && props.touched.password && true}
                                    helperText={props.errors.password && props.touched.password && props.errors.password}
                                />
                            </Box>
                            <Box sx={{
                                width: "450px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "20px"
                            }}>
                                <Typography>Montaj No</Typography>
                                <TextField
                                    sx={{ minWidth: "200px" }}
                                    onFocus={handleField}
                                    variant="filled"
                                    label="Montaj No"
                                    type="montajNo"
                                    name="montajNo"
                                    id="montajNo"
                                    autoComplete="off"
                                    value={montajNo}
                                    onChange={(e) => {
                                        onChangeField(e)
                                        props.handleChange(e);
                                    }}
                                    onBlur={props.handleBlur}
                                    error={props.errors.montajNo && props.touched.montajNo && true}
                                    helperText={props.errors.montajNo && props.touched.montajNo && props.errors.montajNo}
                                />
                            </Box>
                            <ShiftBox />
                            <Box sx={{ margin: "0 auto", display: "flex", gap: "30px" }}>
                                <Button
                                    sx={{
                                        width: "200px",
                                        color: "#eee",
                                        fontSize: "1rem",
                                        backgroundColor: "#000814",
                                        padding: "15px 0px",
                                        boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                                        '&:hover': {
                                            backgroundColor: "#000814",
                                            opacity: "0.9"
                                        }
                                    }}
                                    type="submit"
                                >
                                    GİRİŞ YAP
                                </Button>
                                <Button
                                    sx={{
                                        width: "200px",
                                        color: "#eee",
                                        fontSize: "1rem",
                                        backgroundColor: "primary.red",
                                        padding: "15px 0px",
                                        boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                                        '&:hover': {
                                            backgroundColor: "primary.red",
                                            opacity: "0.9"
                                        }
                                    }}
                                    onClick={() => navigate('/')}>
                                    KAPAT
                                </Button>
                            </Box>
                            <VirtualKeyboard keyboard={keyboard} field={field} />
                        </form>
                    )}
                </Formik>
                <Typography
                    sx={{
                        padding: "0 20px",
                        textDecoration: "underline",
                        display: "flex",
                        justifyContent: "flex-end",
                        color: "#C9464B"
                    }}>
                    Teknik Destek
                </Typography>
            </Box>
        </Box>
    )
}

export default TerminalLoginPage