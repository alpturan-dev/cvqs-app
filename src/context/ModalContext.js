import { useState, createContext } from "react";
import axios from "axios";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {

    const [openModal, setOpenModal] = useState(false);

    const [modalData, setModalData] = useState({})

    async function getModalData(depCode, termName) {
        try {
            await axios.get(`/terminal/defectentry/${depCode}/${termName}/3070725/modalData`)
                .then(res => {
                    const response = res;
                    console.log(response.data)
                    setModalData(response.data)
                });
        } catch (error) {
            console.error(error);
        }
    }

    const [defectResponsible, setDefectResponsible] = useState("");
    const [defectClass, setDefectClass] = useState("");
    const [exitDepartment, setExitDepartment] = useState("");
    const [repairType, setRepairType] = useState("");
    const [description, setDescription] = useState("");
    const [actionTaken, setActionTaken] = useState("");
    const [nrComboBox, setNrComboBox] = useState("");

    const modaldata = {
        openModal,
        setOpenModal,
        modalData,
        setModalData,
        getModalData,
        defectResponsible,
        setDefectResponsible,
        defectClass,
        setDefectClass,
        exitDepartment,
        setExitDepartment,
        repairType,
        setRepairType,
        description,
        setDescription,
        actionTaken,
        setActionTaken,
        nrComboBox,
        setNrComboBox
    }

    return <ModalContext.Provider value={modaldata}>{children}</ModalContext.Provider>

}

export default ModalContext
