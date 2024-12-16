import { NavLink } from 'react-router';
import { useAuth } from './AuthContext';
import foto from './walled.png';

const Navbar = () => {
  const { logout } = useAuth();

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex item-center">
            <div className="flex item-center gap-10">
              <img src={foto} alt="walled" className="w-24" />
            </div>
          </div>
          <div className="flex item-center">
            <nav className="flex item-center gap-8">
              <NavLink to="/" end>
                Dashboard
              </NavLink>
              <NavLink to="/transfer" end>
                Transfer
              </NavLink>
              <NavLink to="/topup" end>
                Top up
              </NavLink>
              <NavLink to="/login" onClick={logout} end>
                Sign Out
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
