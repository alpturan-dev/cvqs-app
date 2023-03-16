import { useState, createContext } from "react";
import axios from "axios";
import { useIdleTimer } from 'react-idle-timer'

const DefectContext = createContext();

export const DefectProvider = ({ children }) => {

    const [selectedDefectPart, setSelectedDefectPart] = useState({ defectName: "" });

    const [defectList, setDefectList] = useState([]);

    async function getDefectList(depCode, termName) {
        try {
            await axios.get(`/terminal/defcorrect/${depCode}/${termName}`)
                .then(res => {
                    const response = res.data;
                    setDefectList(response.data[0].defectList)
                });
        } catch (error) {
            console.error(error);
        }
    }

    const [innerScreen, setInnerScreen] = useState(false);

    function closeInnerScreen() {
        setInnerScreen(false);
        setImage(imageURLs[0])
    }

    const imageURLs = [
        "https://ikinciyeniblogfles.blob.core.windows.net/images/3e9cd9c7-0995-4859-90c9-1015f75cf686.jpg",
        "https://i.ytimg.com/vi/NgyniN9ME4A/maxresdefault.jpg"
    ]

    const [image, setImage] = useState(imageURLs[0]);

    const handleInnerImage = (childPicID) => {
        //childPicId'ye gore image degistirilebilir.
        if (childPicID === 87897) {
            //A/C icin dummy foto
            setImage(imageURLs[1])
            setInnerScreen(true)
        }
    }

    const [defectSelected, setDefectSelected] = useState(false)

    const [arrow, setArrow] = useState({ x: "", y: "" })

    const [largeFont, setLargeFont] = useState(false);

    const handleLargeFont = () => {
        setLargeFont(true)
    }

    const [largeFontData, setLargeFontData] = useState({})

    async function getLargeFontData(depCode, termName) {
        try {
            await axios.get(`/terminal/defectentry/${depCode}/${termName}/3070725/largeFont`)
                .then(res => {
                    const response = res;
                    setLargeFontData(response.data.data)
                });
        } catch (error) {
            console.error(error);
        }
    }

    const [active, setActive] = useState(true)
    const [remaining, setRemaining] = useState(0)

    const onIdle = () => {
        setActive(false)

    }

    const onActive = () => {
        setActive(true)
    }

    const { getRemainingTime } = useIdleTimer({
        onIdle,
        onActive,
        timeout: 70_000,
        throttle: 500
    })

    const defectdata = {
        selectedDefectPart,
        setSelectedDefectPart,
        defectList,
        setDefectList,
        getDefectList,
        innerScreen,
        setInnerScreen,
        closeInnerScreen,
        image,
        setImage,
        handleInnerImage,
        defectSelected,
        setDefectSelected,
        arrow,
        setArrow,
        largeFont,
        setLargeFont,
        handleLargeFont,
        largeFontData,
        setLargeFontData,
        getLargeFontData,
        active,
        setActive,
        getRemainingTime,
        remaining,
        setRemaining
    }

    return <DefectContext.Provider value={defectdata}>{children}</DefectContext.Provider>
}
export default DefectContext