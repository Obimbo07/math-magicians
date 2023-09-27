/* eslint-disable import/no-extraneous-dependencies */
import { NavLink } from 'react-router-dom';

function NavBar() {
  const links = [
    { path: '/', text: 'Home', className: 'Nav-Link' },
    { path: 'calculator', text: 'Calculator', className: 'navLink' },
    { path: 'quote', text: 'Quote', className: 'navLink' },
  ];
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <h1 className="nav-logo">Math Magicians</h1>
        <div className="nav-link">
          {links.map((link) => (
            <li className={link.className} key={link.text}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
