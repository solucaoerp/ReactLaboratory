import { Navigate, Route, Routes } from "react-router-dom";

import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Login from '../Login/Login';
import App002 from "../../apps/App002";

const AppRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/app002" element={<App002 />} />

            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>

    );
};

export default AppRoutes;
