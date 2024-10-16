import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "../src/components/Login/Login";
import Profile from "../src/components/Profile/profile";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Điều hướng mặc định từ "/" sang "/login" */}
                    <Route path="/" element={<Navigate to="/login" />} />

                    {/* Route đến trang login */}
                    <Route path="/login" element={<Login />} />

                    {/* Route đến trang profile */}
                    <Route path="/profile" element={<Profile />} />

                    {/* Route fallback nếu không khớp */}
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
