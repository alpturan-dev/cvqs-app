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
                    setModalData(response.data)
                });
        } catch (error) {
            console.error(error);
        }
    }

    const [modalForm, setModalForm] = useState({
        defectResponsible: "",
        defectClass: "",
        exitDepartment: "",
        repairType: "",
        description: "",
        actionTaken: "",
        nrComboBox: ""
    })



    const modaldata = {
        openModal,
        setOpenModal,
        modalData,
        setModalData,
        getModalData,
        modalForm,
        setModalForm
    }

    return <ModalContext.Provider value={modaldata}>{children}</ModalContext.Provider>

}

export default ModalContext
