import { NavLink } from 'react-router';
import foto from './walled.png';
import walled from './login.png';

const RegisterPage = () => {
  return (
    <div className="flex bg-gray-100">
      <div className="shadow-lg p-8">
        <img src={foto} alt="walled" className="m-auto pb-4" />
        <form className="flex flex-col gap-4 pb-4">
          <input type="text" placeholder="Nama Lengkap" className="p-2 rounded " />
          <input type="text" placeholder="Email" className="p-2 rounded" />
          <input type="password" placeholder="Password" className="p-2 rounded" />
          <input type="text" placeholder="No Hp" className="p-2 rounded" />
          <button type="daftar" className="p-2 bg-teal-600 text-white rounded hover:bg-teal-500">
            Daftar
          </button>
        </form>
        <p className="flex nowrap">
          Sudah punya akun?{' '}
          <nav className="text-teal-600 self-start">
            <NavLink to="/login" end>
              Login disini
            </NavLink>
          </nav>
        </p>
      </div>
      <img src={walled} alt="login" className="flex flex-right overflow-hidden w-1/2" />
    </div>
  );
};

export default RegisterPage;
