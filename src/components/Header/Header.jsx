import { Link, NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header>
      <h1>
        <Link to="/">Fashion World</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/">Clothes</NavLink>
          </li>
          <li>
            <NavLink to="/measurements">Measurements</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
