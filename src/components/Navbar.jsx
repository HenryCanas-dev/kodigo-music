import { Link, useLocation } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Inicio", icon: <FaHome /> },
    { to: "/search", label: "Búsqueda", icon: <FaSearch /> },
  ];

  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-gradient-to-r from-primary to-accent shadow-lg">
      {/* Logo */}
      <h1 className="text-white font-display text-2xl font-bold">
        Kodigo Music
      </h1>

      {/* Links */}
      <ul className="flex gap-6 text-white font-medium">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={`flex items-center gap-2 transition ${
                location.pathname === link.to
                  ? "text-accent font-semibold"
                  : "hover:text-accent"
              }`}
            >
              {link.icon}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;