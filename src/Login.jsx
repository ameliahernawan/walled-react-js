import { useState } from 'react';
import foto from './walled.png';
import login from './login.png';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'Admin') {
      login(email);
      navigate('/');
    } else {
      setError('Login Error');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col gap-4 items-center w-[400px] shadow-lg p-8">
        <img src={foto} alt="walled" className="w-32 pb-5" />
        <form onSubmit={handleSubmit} method="POST" className="flex flex-col gap-4 w-full">
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="p-2 border rounded" />

          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="p-2 border rounded" />

          <button type="submit" className="p-2 bg-teal-600 text-white rounded hover:bg-teal-500 w-full">
            Login
          </button>
        </form>
        <p>
          Belum punya akun?{' '}
          <nav className="text-teal-600 self-start">
            <NavLink to="/register" end>
              Daftar disini
            </NavLink>
          </nav>
        </p>
      </div>
    </div>
  );
};

export default Login;
