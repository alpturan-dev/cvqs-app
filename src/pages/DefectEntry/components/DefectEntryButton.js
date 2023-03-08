import { Button, Typography } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TerminalContext from "../../../context/TerminalContext"
import { useContext } from "react";
function DefectEntryButton({ label, disabled, type }) {


    return (
        <Button
            disabled={disabled && true}
            sx={{
                width: "80%",
                height: "70px",
                padding: "15px 10px",
                backgroundColor: disabled ? "primary.main" : "secondary.main",
                border: disabled && "2px solid",
                borderColor: disabled && "secondary.main",
                '&:hover': {
                    backgroundColor: "secondary.main",
                    opacity: "0.95",
                }
            }}>
            <Typography
                sx={{
                    display: "flex",
                    alignItems: "center"
                }}>
                {type === "back" && <ArrowBackIosIcon />}
                {label}
            </Typography>
        </Button>
    )
}

export default DefectEntryButton