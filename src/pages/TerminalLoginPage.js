import {Box, TextField, Typography} from '@mui/material'
import {useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import TerminalContext from "../context/TerminalContext";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import SelectBox from "../components/SelectBox";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

function TerminalLoginPage() {

    let {depCode, termName} = useParams();
    const {filteredTerminals, getFilteredTerminals} = useContext(TerminalContext);

    useEffect(() => {
        getFilteredTerminals(depCode, termName);
    }, [])

    return (
        <Box sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "primary.main",
        }}>
            <Box sx={{
                border: "2px solid gray",
                borderRadius: "10px",
                width: "50%",
                padding: "40px 40px",
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}>
                <Typography
                    variant="h3"
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
                    initialValues={{email: '', password: ''}}
                    validate={values => {
                        const errors = {};
                        return errors;
                    }}
                    onSubmit={(values, {setSubmitting}) => {
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
                                  alignItems: "start",
                                  gap: "30px",
                                  margin: "50px auto"
                              }}>
                            <Box sx={{
                                width: "450px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "40px"
                            }}>
                                <Typography>Terminal Listesi</Typography>
                                <SelectBox categories={filteredTerminals}/>
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
                                    label="Sicil No"
                                    variant="filled"
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
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
                                    variant="filled"
                                    type="password"
                                    name="email"
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
                                    label="Montaj No"
                                    variant="filled"
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </Box>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>
                {/*{depCode} == {termName}*/}
                {/*{filteredTerminals.map((terminal) => (*/}
                {/*    <></>*/}
                {/*))}*/}
            </Box>
        </Box>


    )
}

export default TerminalLoginPage