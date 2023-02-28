import {Routes, Route} from 'react-router-dom'
import TerminalListPage from "./pages/TerminalListPage";
import TerminalLoginPage from "./pages/TerminalLoginPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<TerminalListPage/>}/>
            <Route path="/terminal/:depCode/:termName" element={<TerminalLoginPage/>}/>
        </Routes>
    );
}

export default App;
