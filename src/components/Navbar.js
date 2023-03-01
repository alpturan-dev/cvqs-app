import {Box, Typography} from '@mui/material'
import {Link, useNavigate} from "react-router-dom";

function Navbar() {
    return (
        <Box sx={{
            backgroundColor: "primary.main",
            color: "secondary.main",
            padding: "25px 50px",
            borderColor: "secondary.main"
        }}>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Typography variant='h4' sx={{fontWeight: "bolder"}}>Complete Vehicle Quality</Typography>
                <Box
                    sx={{display: "flex", gap: "25px"}}>
                    {['Yardım', 'Anasayfa', 'Destek'].map((value, index) => (
                        <Link key={index} to='' style={{textDecoration: "none"}}>
                            <Typography sx={{
                                textDecoration: "none",
                                color: "#c1121f",
                                fontWeight: "bolder",
                                '&:hover': {
                                    opacity: "0.8"
                                }
                            }}>
                                {value}
                            </Typography>
                        </Link>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar