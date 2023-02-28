import {useParams} from "react-router-dom";

function TerminalLoginPage() {

    let {depCode, termName} = useParams();

    return (
        <>
            {depCode} == {termName}
        </>
    )
}

export default TerminalLoginPage