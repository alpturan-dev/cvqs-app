import { Box, TextField, Typography, Button } from '@mui/material'
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import TerminalContext from "../context/TerminalContext";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import SelectBox from "../components/SelectBox";
import ShiftBox from "../components/ShiftBox";
import VirtualKeyboard from "../components/VirtualKeyboard";
import { useState, useRef } from "react";

function TerminalLoginPage() {

    let { depCode, termName } = useParams();
    const { filteredTerminals, getFilteredTerminals } = useContext(TerminalContext);

    useEffect(() => {
        getFilteredTerminals(depCode, termName);
    }, [])

    const [sicilNo, setSicilNo] = useState("");
    const [password, setPassword] = useState("");
    const [montajNo, setMontajNo] = useState("");
    const [field, setField] = useState("");

    const handleField = (event) => {
        setField(event.target.id)
        console.log(event.target.id)
    }

    const keyboard = useRef();

    const onKeyboardChange = input => {
        if (field === "sicilNo") {
            console.log("aktif input", field)
            setSicilNo(input);
        } else if (field === "password") {
            console.log("aktif input", field)
            setPassword(input)
        } else if (field === "montajNo") {
            console.log("aktif input", field)
            setMontajNo(input)
        }
        console.log("Input changed", input);
    };
    const onChangeSicil = event => {
        const input = event.target.value;
        setSicilNo(input);
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
                width: "60%",
                padding: "20px 0 ",
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}>
                <Typography
                    variant="h4"
                    sx={{
                        color: "secondary.main",
                        textAlign: "center",
                        textDecoration: "underline",
                        textUnderlineOffset: "6px"
                    }}
                >
                    CVQS
                </Typography>
                <Formik
                    initialValues={{ sicilNo: { sicilNo }, password: '' }}
                    validate={values => {
                        const errors = {};
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                        values,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "20px",
                                margin: "20px auto"
                            }}>
                            <Box sx={{
                                width: "450px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "40px"
                            }}>
                                <Typography>Terminal Listesi</Typography>
                                <SelectBox inputLabel='Terminal' categories={filteredTerminals} />
                            </Box>
                            <Box sx={{
                                width: "450px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "40px"
                            }}>
                                <Typography>Sicil No</Typography>
                                <TextField
                                    sx={{ minWidth: "200px" }}
                                    onClick={handleField}
                                    label="Sicil No"
                                    variant="filled"
                                    id="sicilNo"
                                    name="sicilNo"
                                    onChange={onChangeSicil}
                                    onBlur={handleBlur}
                                    value={sicilNo}
                                />
                            </Box>
                            <Box sx={{
                                width: "450px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "40px"
                            }}>
                                <Typography>Şifre</Typography>
                                <TextField
                                    sx={{ minWidth: "200px" }}
                                    onClick={handleField}
                                    variant="filled"
                                    type="password"
                                    name="password"
                                    id="password"
                                    autoComplete=''
                                    value={password}
                                    onChange={handleChange}
                                />
                            </Box>
                            <Box sx={{
                                width: "450px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "40px"
                            }}>
                                <Typography>Montaj No</Typography>
                                <TextField
                                    sx={{ minWidth: "200px" }}
                                    onClick={handleField}
                                    label="Montaj No"
                                    variant="filled"
                                    id="montajNo"
                                    name="montajNo"
                                    value={montajNo}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Box>
                            <ShiftBox />
                            <Box sx={{ margin: "0 auto", display: "flex", gap: "30px" }}>
                                <Button sx={{
                                    width: "250px",
                                    color: "#eee",
                                    fontSize: "1.1rem",
                                    backgroundColor: "#000814",
                                    padding: "15px 40px",
                                    '&:hover': {
                                        backgroundColor: "#000814",
                                        opacity: "0.9"
                                    }
                                }}
                                    type="submit"
                                    disabled={isSubmitting}>
                                    GİRİŞ YAP
                                </Button>
                                <Button sx={{
                                    width: "250px",
                                    color: "#eee",
                                    fontSize: "1.1rem",
                                    backgroundColor: "primary.red",
                                    padding: "15px 40px",
                                    '&:hover': {
                                        backgroundColor: "primary.red",
                                        opacity: "0.9"
                                    }
                                }}
                                    type="submit"
                                    disabled={isSubmitting}>
                                    KAPAT
                                </Button>
                            </Box>
                            <VirtualKeyboard keyboard={keyboard} field={field} onChange={onKeyboardChange} />
                        </form>
                    )}
                </Formik>
            </Box>
        </Box >


    )
}

export default TerminalLoginPage