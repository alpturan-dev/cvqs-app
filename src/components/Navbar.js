import {Box, Typography} from '@mui/material'
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <Box sx={{
            backgroundColor: "primary.main",
            color: "secondary.main",
            padding: "25px 50px",
            borderBottom: "1px solid",
            borderColor: "secondary.main"
        }}>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Typography variant='h4' sx={{fontWeight: "bolder"}}>Complete Vehicle Quality</Typography>
                <Box
                    sx={{display: "flex", gap: "25px"}}>
                    <Link to='' style={{textDecoration: "none"}}>
                        <Typography sx={{textDecoration: "none", color: "#c1121f", fontWeight: "bolder"}}>
                            Yardım
                        </Typography>
                    </Link>
                    <Link to='' style={{textDecoration: "none"}}>
                        <Typography sx={{textDecoration: "none", color: "#c1121f", fontWeight: "bolder"}}>
                            Anasayfa
                        </Typography>
                    </Link>
                    <Link to='' style={{textDecoration: "none"}}>
                        <Typography sx={{textDecoration: "none", color: "#c1121f", fontWeight: "bolder"}}>
                            Destek
                        </Typography>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar