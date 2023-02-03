import { Link, Outlet, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Layout = () => {
  
  const location = useLocation();


  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-[#3A8891] px-5 py-10">
        {/* App Name/Logo */}
        <div className="flex items-center justify-center">
          <img src={logo} alt="logo" className="w-16 md:w-20" />
          <h2 className="text-white font-black text-2xl md:text-3xl p-2">
            Pennyworth ~ CRM
          </h2>
        </div>

        {/* Navigation */}
        <nav className="mt-6 md:mt-14">
          <Link
            to={'/'}
            className={`${
              location.pathname === '/' ? 'text-[#aef5fc]' : 'text-white'
            } mr-2 text-lg md:text-2xl md:block md:mt-3 text-white hover:text-[#aef5fc] font-bold`}
          >
            Clients
          </Link>
          <Link
            to={'/clients/new'}
            className={`${
              location.pathname === '/clients/new'
                ? 'text-[#aef5fc]'
                : 'text-white'
            } mr-2 text-lg md:text-2xl md:block md:mt-3 text-white hover:text-[#aef5fc] font-bold`}
          >
            New Client
          </Link>
        </nav>
      </aside>

      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
