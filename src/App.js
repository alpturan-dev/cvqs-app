import {Routes, Route} from 'react-router-dom'
import TerminalListPage from "./pages/TerminalListPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<TerminalListPage/>}/>
        </Routes>
    );
}

export default App;
