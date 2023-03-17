import * as React from 'react';
import { useContext } from 'react';
import DefectContext from '../../../context/DefectContext';
import ShiftContext from '../../../context/ShiftContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Formik } from 'formik';
import SelectBox from '../../../components/SelectBox';
import VirtualKeyboard from "../../../components/VirtualKeyboard";
import { useRef } from "react";
import ModalContext from '../../../context/ModalContext';
import KeyboardContext from '../../../context/KeyboardContext';
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 850,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
};

export default function DefectModal({ depCode, termName, loginData }) {

    const { t } = useTranslation();

    const {
        field,
        setField
    } = useContext(KeyboardContext);

    const { selectedDefectPart, arrow, setInnerScreen, closeInnerScreen, setSelectedDefectPart, setDefectSelected } = useContext(DefectContext)

    const newDefectData = { selectedDefectPart, arrow };

    const keyboard = useRef();

    React.useEffect(() => {
        getModalData(depCode, termName);
    }, [])

    const {
        openModal,
        setOpenModal,
        modalData,
        getModalData,
        modalForm,
        setModalForm
    } = useContext(ModalContext);

    const handleClose = () => setOpenModal(false);

    const handleField = (event) => {
        setField(event.target.id)
    }

    const onChangeField = event => {
        const input = event.target.value;
        setModalForm({ ...modalForm, [event.target.id]: input })
        keyboard.current.setInput(input);
    };

    return (
        <div>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant='h5' sx={{ paddingBottom: "20px", textAlign: "center", fontWeight: "bolder" }}>
                        CVQS (TMMT)
                    </Typography>
                    <Formik
                        initialValues={{
                            defectResponsible: modalForm.defectResponsible,
                            defectClass: modalForm.defectClass,
                            exitDepartment: modalForm.exitDepartment,
                            repairType: modalForm.repairType,
                            description: modalForm.description,
                            actionTaken: modalForm.actionTaken,
                            nrComboBox: modalForm.nrComboBox
                        }}
                        validate={values => {
                            // const errors = {};
                            // if (!values.sicilNo) {
                            //     errors.sicilNo = 'Bu alan boş bırakılamaz!';
                            // } else if (
                            //     !/^[0-9]*$/i.test(values.sicilNo)
                            // ) {
                            //     errors.sicilNo = 'Geçersiz Sicil No!';
                            // }
                            // if (!values.password) {
                            //     errors.password = 'Bu alan boş bırakılamaz!';
                            // } else if (
                            //     !/^[0-9]*$/i.test(values.password)
                            // ) {
                            //     errors.password = 'Geçersiz Şifre!';
                            // }
                            // if (!values.montajNo) {
                            //     errors.montajNo = 'Bu alan boş bırakılamaz!';
                            // } else if (
                            //     !/^[0-9]*$/i.test(values.montajNo)
                            // ) {
                            //     errors.montajNo = 'Geçersiz Montaj No!';
                            // }
                            // return errors;
                        }}
                        onSubmit={(values) => {
                            setTimeout(() => {
                                console.log('Defect Modal Values', Object.assign(newDefectData, Object.assign(loginData, values)));
                                toast.success(t('defectSaved'));
                                handleClose();
                                closeInnerScreen();
                                setSelectedDefectPart("");
                                setDefectSelected(false)
                            }, 600);
                        }}
                    >
                        {props => (
                            <form
                                onSubmit={props.handleSubmit}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    gap: "30px",
                                    margin: "10px auto"
                                }}
                            >
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "70px",
                                    justifyContent: "space-between",
                                }}>
                                    <Box sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "30px",
                                    }}>
                                        <Box sx={{
                                            width: "350px",
                                            display: "flex",
                                            alignItems: "start",
                                            justifyContent: "space-between",
                                            gap: "20px"
                                        }}>
                                            <SelectBox
                                                context="modal"
                                                name="defectResponsible"
                                                inputLabel={t('defectResponsible')}
                                                categories={modalData.requiredFieldsByInspectionDTOList[5].errDetailComboBoxValueDTOList}
                                            />
                                        </Box>
                                        <Box sx={{
                                            width: "350px",
                                            display: "flex",
                                            alignItems: "start",
                                            justifyContent: "space-between",
                                            gap: "20px"
                                        }}>
                                            <SelectBox
                                                context="modal"
                                                name="defectClass"
                                                inputLabel={t('defectClass')}
                                                categories={modalData.requiredFieldsByInspectionDTOList[4].errDetailComboBoxValueDTOList}
                                            />
                                        </Box>
                                        <Box sx={{
                                            width: "350px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            gap: "20px"
                                        }}>
                                            <SelectBox
                                                context="modal"
                                                name="exitDepartment"
                                                inputLabel={t('exitDepartment')}
                                                categories={modalData.requiredFieldsByInspectionDTOList[0].errDetailComboBoxValueDTOList}
                                            />
                                        </Box>
                                        <Box sx={{
                                            width: "350px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            gap: "20px"
                                        }}>
                                            <SelectBox
                                                context="modal"
                                                name="repairType"
                                                inputLabel={t('repairType')}
                                                categories={[{ dataValue: "Inline" }, { dataValue: "Offline" }]}
                                            />
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        gap: "20px",
                                    }}>
                                        <Box sx={{
                                            width: "350px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            gap: "20px"
                                        }}>
                                            <Typography>{t('description')}</Typography>
                                            <TextField
                                                sx={{ width: "200px" }}
                                                multiline
                                                rows={4}
                                                onFocus={handleField}
                                                variant="filled"
                                                id="description"
                                                name="description"
                                                autoComplete="off"
                                                value={modalForm.description}
                                                onBlur={props.handleBlur}
                                                onChange={(e) => {
                                                    onChangeField(e)
                                                    props.handleChange(e);
                                                }}
                                            // error={props.errors.sicilNo && props.touched.sicilNo && true}
                                            // helperText={props.errors.sicilNo && props.touched.sicilNo && props.errors.sicilNo}
                                            />
                                        </Box>
                                        <Box sx={{
                                            width: "350px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            gap: "20px"
                                        }}>
                                            <Typography>{t('actionTaken')}</Typography>
                                            <TextField
                                                sx={{ width: "200px" }}
                                                onFocus={handleField}
                                                variant="filled"
                                                id="actionTaken"
                                                name="actionTaken"
                                                autoComplete="off"
                                                value={modalForm.actionTaken}
                                                onBlur={props.handleBlur}
                                                onChange={(e) => {
                                                    onChangeField(e)
                                                    props.handleChange(e);
                                                }}
                                            // error={props.errors.sicilNo && props.touched.sicilNo && true}
                                            // helperText={props.errors.sicilNo && props.touched.sicilNo && props.errors.sicilNo}
                                            />
                                        </Box>
                                        <Box sx={{
                                            width: "350px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            gap: "20px"
                                        }}>
                                            <SelectBox
                                                context="modal"
                                                name="nrComboBox"
                                                inputLabel={t('nrComboBox')}
                                                categories={modalData.nrComboBox}
                                            />
                                        </Box>
                                    </Box>
                                </Box>

                                <Box sx={{ margin: "0 auto", display: "flex", gap: "30px" }}>
                                    <Button
                                        sx={{
                                            width: "200px",
                                            color: "#eee",
                                            fontSize: "1rem",
                                            backgroundColor: "#000814",
                                            padding: "15px 0px",
                                            boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                                            '&:hover': {
                                                backgroundColor: "#000814",
                                                opacity: "0.9"
                                            }
                                        }}
                                        type="submit"
                                    >
                                        {t('save')}
                                    </Button>
                                    <Button
                                        onClick={() => setOpenModal(false)}
                                        sx={{
                                            width: "200px",
                                            color: "#eee",
                                            fontSize: "1rem",
                                            backgroundColor: "primary.red",
                                            padding: "15px 0px",
                                            boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                                            '&:hover': {
                                                backgroundColor: "primary.red",
                                                opacity: "0.9"
                                            }
                                        }}>
                                        {t('cancel')}
                                    </Button>
                                </Box>
                                <VirtualKeyboard keyboard={keyboard} field={field} />
                            </form>
                        )}
                    </Formik>
                </Box>
            </Modal>
        </div>
    );
}