import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Xóa token khỏi localStorage
        navigate('/login'); // Điều hướng người dùng về trang đăng nhập
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Profile Page</h2>
                <p className="text-center text-gray-600">
                    Welcome to your profile! Here you can manage your personal information.
                </p>
                <button
                    onClick={handleLogout}
                    className="w-full py-2 mt-4 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Profile;
