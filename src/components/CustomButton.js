import { Button, Typography } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import DefectContext from "../context/DefectContext";
import ModalContext from "../context/ModalContext";

function CustomButton({ label, disabled, type }) {
    const navigate = useNavigate();
    let { depCode, termName } = useParams();

    const { openModal, setOpenModal } = useContext(ModalContext)

    const handleDefectList = () => {
        if (type === "defectList") {
            navigate(`/terminal/defcorrect/${depCode}/${termName}`);
        } else if (type === "defectModal") {
            console.log("modal opened")
            setOpenModal(true)
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