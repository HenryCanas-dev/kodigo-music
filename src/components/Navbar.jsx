import { Link } from 'react-router-dom';
import { FaHome, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex justify-around p-4 bg-black">
      <Link to="/" className="flex items-center text-lg hover:text-green-500">
        <FaHome className="mr-2" /> Inicio
      </Link>
      <Link to="/search" className="flex items-center text-lg hover:text-green-500">
        <FaSearch className="mr-2" /> Búsqueda
      </Link>
    </nav>
  );
};

export default Navbar;