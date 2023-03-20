import React from 'react'
import { Box, TextField, Typography, Button } from '@mui/material'
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import TerminalContext from "../../context/TerminalContext";
import ShiftContext from '../../context/ShiftContext';
import { Formik } from 'formik';
import ShiftBox from "./components/ShiftBox";
import VirtualKeyboard from "../../components/VirtualKeyboard";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import KeyboardContext from '../../context/KeyboardContext';
import * as Yup from 'yup';
import SelectBox from '../../components/SelectBox';
import { useTranslation } from "react-i18next";

function TerminalLoginPage() {

    const { t } = useTranslation();

    let { depCode, termName } = useParams();
    const navigate = useNavigate();
    const handleDefectEntry = (depCode, termName, values) => {
        navigate(`/terminal/defectentry/${depCode}/${termName}/3070725`, { state: values });
    }
    const { filteredTerminals, getFilteredTerminals, selectedTerminal } = useContext(TerminalContext);
    const { loginForm, setLoginForm } = useContext(ShiftContext);

    const { field, handleField } = useContext(KeyboardContext);

    useEffect(() => {
        getFilteredTerminals(depCode, termName);
    }, [])


    const keyboard = useRef();

    const onChangeField = event => {
        const input = event.target.value;
        setLoginForm({ ...loginForm, [event.target.id]: input })
        keyboard.current.setInput(input);
    };

    const SignupSchema = Yup.object().shape({
        terminal: Yup.string().required(),
        registrationNo: Yup.number().required().integer(),
        password: Yup.number().required().integer(),
        assemblyNo: Yup.number().required().integer(),
    });

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
                    validateOnChange={false}
                    validateOnBlur={false}
                    initialValues={{
                        terminal: selectedTerminal,
                        registrationNo: loginForm.registrationNo,
                        password: loginForm.password,
                        assemblyNo: loginForm.assemblyNo,
                        date: loginForm.date,
                        shift: loginForm.shift
                    }}
                    validationSchema={SignupSchema}
                    validate={values => {
                        const errors = {};
                        if (values.registrationNo !== "3070725") {
                            errors.registrationNo = 'Wrong registration number!';
                        }
                        if (values.password !== "222") {
                            errors.password = 'Wrong password!';
                        }
                        if (values.assemblyNo !== "222") {
                            errors.assemblyNo = 'Wrong assembly number!';
                        }
                        return errors;
                    }}
                    onSubmit={(values) => {
                        setTimeout(() => {
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
                            <Box sx={{
                                width: "450px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "40px"
                            }}>
                                <SelectBox
                                    context="terminal"
                                    name="terminal"
                                    inputLabel={t('terminal')}
                                    categories={filteredTerminals}
                                />
                            </Box>
                            <Box sx={{
                                width: "450px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "20px"
                            }}>
                                <Typography>{t('registrationNo')}</Typography>
                                <TextField
                                    sx={{ minWidth: "200px" }}
                                    onFocus={handleField}
                                    label={t('registrationNo')}
                                    variant="filled"
                                    id="registrationNo"
                                    name="registrationNo"
                                    autoComplete="off"
                                    value={loginForm.registrationNo}
                                    onBlur={props.handleBlur}
                                    onChange={(e) => {
                                        onChangeField(e)
                                        props.handleChange(e);
                                    }}
                                    error={props.errors.registrationNo && props.touched.registrationNo && true}
                                    helperText={props.errors.registrationNo && props.touched.registrationNo && props.errors.registrationNo}
                                />
                            </Box>
                            <Box sx={{
                                width: "450px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "20px"
                            }}>
                                <Typography>{t('password')}</Typography>
                                <TextField
                                    sx={{ minWidth: "200px" }}
                                    onFocus={handleField}
                                    variant="filled"
                                    type="password"
                                    name="password"
                                    id="password"
                                    autoComplete=''
                                    value={loginForm.password}
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
                                <Typography>{t('assemblyNo')}</Typography>
                                <TextField
                                    sx={{ minWidth: "200px" }}
                                    onFocus={handleField}
                                    variant="filled"
                                    label={t('assemblyNo')}
                                    name="assemblyNo"
                                    id="assemblyNo"
                                    autoComplete="off"
                                    value={loginForm.assemblyNo}
                                    onChange={(e) => {
                                        onChangeField(e)
                                        props.handleChange(e);
                                    }}
                                    onBlur={props.handleBlur}
                                    error={props.errors.assemblyNo && props.touched.assemblyNo && true}
                                    helperText={props.errors.assemblyNo && props.touched.assemblyNo && props.errors.assemblyNo}
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
                                    {t('login')}
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
                                    onClick={() => navigate('/')}
                                >
                                    {t('close')}
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
                    {t('technicalSupport')}
                </Typography>
            </Box>
        </Box>
    )
}

export default TerminalLoginPage