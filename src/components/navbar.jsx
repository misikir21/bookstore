import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './css/style.css';
import { FaBeer } from 'react-icons/fa';
const CustomLink = (prop) => {
  const { to, children } = prop;
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to}>{children}</Link>
    </li>
  );
};

const Navbar = () => (
  <nav className="nav">
    <div className="nav-title">
      <h1 className="site-title">Bookstroe CMS</h1>
      <FaBeer />
      <ul>
        <CustomLink to="/">BOOKS</CustomLink>
        <CustomLink to="/categories">CATEGORIES</CustomLink>
      </ul>
    </div>
    <div className="wapper-icon">
      <i className="uil uil-user-circle" />
    </div>
  </nav>
);
export default Navbar;
