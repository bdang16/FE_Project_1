import React, { useState } from 'react';
import authService from '../../services/AuthService/authService';

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        try {
            const response = await authService.login(username, password);

            localStorage.setItem('token', response.token);

            window.location.href = '/';
        } catch (err) {
            setError('Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin.');
            console.error(err);
        }
    };

    return (
        <div>
            <h2>Đăng Nhập</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Tên người dùng:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Mật khẩu:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <button type="submit">Đăng Nhập</button>
            </form>
        </div>
    );
};

export default Login;