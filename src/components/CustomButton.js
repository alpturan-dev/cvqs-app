import { Button, Typography } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function CustomButton({ label, disabled, type }) {
    const navigate = useNavigate();
    let { depCode, termName } = useParams();

    const handleDefectList = () => {
        if (label === "HATA LİSTESİ") {
            navigate(`/terminal/defcorrect/${depCode}/${termName}`);
        }
    }

    return (
        <Button
            onClick={handleDefectList}
            disabled={disabled && true}
            sx={{
                width: "100%",
                height: "70px",
                padding: "10px 20px",
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

export default CustomButton