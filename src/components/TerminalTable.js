import {Box, Typography} from '@mui/material'
import {useNavigate} from "react-router-dom";

function TerminalTable({terminals}) {

    const navigate = useNavigate();
    const handleLogin = (depCode, termName) => {
        navigate(`/terminal/${depCode}/${termName}`);
    }

    return (
        <>
            <Typography variant='h5' sx={{
                paddingBottom: "20px",
                fontWeight: "bolder",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                textAlign: "center",
                color: "secondary.main"
            }}>
                Tüm Terminaller
            </Typography>
            <Box sx={{
                display: "flex",
                padding: "20px 30px",
                color: "secondary.main",
                border: "1px solid gray",
                fontWeight: "bolder",
                backgroundColor: "#ddd"
            }}>
                <Typography variant='subtitle1' sx={{width: "30%"}}>
                    Bölüm Bazında
                </Typography>
                <Typography variant='subtitle1' sx={{width: "70%", paddingLeft: "25%"}}>
                    Filtre Bazında
                </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                borderLeft: "1px solid gray",
                borderRight: "1px solid gray",
                padding: "5px 30px",
                color: "secondary.main",
            }}>
                {terminals.map((terminal, index) => (
                    <Box
                        key={index}
                        sx={{display: "flex", alignItems: "center", borderBottom: "1px solid gray", padding: "20px 0"}}>
                        <Box sx={{width: "20%", fontWeight: "bolder"}}>
                            {terminal.depName}
                        </Box>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            flexWrap: "wrap",
                            gap: "40px",
                            width: "80%",
                            minHeight: "0px"
                        }}>
                            {terminal.filterBaseds.map((filtered, index) => (
                                <Box
                                    key={index}
                                    onClick={() => handleLogin(terminal.depCode, filtered.filterCode)}
                                    sx={{
                                        cursor: 'pointer',
                                        position: "relative",
                                        minWidth: "60px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        border: "1px solid gray",
                                        borderRadius: "0px",
                                        padding: "15px 10px",
                                        '&:hover': {
                                            transition: "0.5s all",
                                            backgroundColor: "secondary.main",
                                            color: "#eee"
                                        }
                                    }}>
                                    <Box
                                        sx={{
                                            textAlign: "center",
                                            padding: "2px 8px",
                                            margin: "0",
                                            position: "absolute",
                                            color: "#eee",
                                            top: '-10px',
                                            right: "-10px",
                                            backgroundColor: "primary.red",
                                            borderRadius: "10px",
                                        }}>
                                        {filtered.linkCount}
                                    </Box>
                                    <Box sx={{textAlign: "center"}}>
                                        {filtered.filterCode}
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>

        </>
    )
}

export default TerminalTable