import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TestThemes from "./pages/TestThemes";


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="test" element={<TestThemes />} />
        </Routes>

    );
}

export default App;
