import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homescreen from "../screens/homescreen.js"
import Aboutscreen from "../screens/About.js"
import Contactscreen from "../screens/contact.js"
import Settingscreen from "../screens/settings.js"
import InvalidScreen from "./invalidscreen";

const Navigationsstack = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* static Route */}
                <Route path="/" Component={Homescreen} />
                <Route path="/Aboutscreen" Component={Aboutscreen}/>
                <Route path="/Contactscreen" Component={Contactscreen}/>
                <Route path="/Settingscreen" Component={Settingscreen} />

                {/* invalid Route */}
                <Route path="*" Component={InvalidScreen}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Navigationsstack;
