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

    const { setOpenModal } = useContext(ModalContext)

    const { setLargeFont, closeInnerScreen, setDefectSelected, setSelectedDefectPart } = useContext(DefectContext)

    const handleClick = () => {
        if (type === "defectList") {
            navigate(`/terminal/defcorrect/${depCode}/${termName}`);
        } else if (type === "defectModal") {
            setOpenModal(true)
        } else if (type === "clear") {
            closeInnerScreen()
            setDefectSelected(false)
            setSelectedDefectPart(null)
        } else if (type === "largeFont") {
            setLargeFont(true);
            setDefectSelected(false)

        } else if (type === "HATA GİRİŞ") {
            setLargeFont(false)
            setDefectSelected(false)
        }
    }

    return (
        <Button
            onClick={handleClick}
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