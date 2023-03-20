import { Routes, Route } from 'react-router-dom'
import DefectEntry from './pages/DefectEntry/DefectEntry';
import TerminalList from "./pages/TerminalList/TerminalList";
import TerminalLogin from "./pages/TerminalLogin/TerminalLogin";
import DefectList from './pages/DefectList/DefectList';

function App() {
    return (
        <Routes>
            <Route path="/" element={<TerminalList />} />
            <Route path="/terminal/:depCode/:termName" element={<TerminalLogin />} />
            <Route path="/terminal/defectentry/:depCode/:termName/3070725" element={<DefectEntry />} />
            <Route path="/terminal/defcorrect/:depCode/:termName" element={<DefectList />} />
        </Routes>
    );
}

export default App;
