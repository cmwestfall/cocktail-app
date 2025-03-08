import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <nav className="page-header">
      <NavLink to="/home" end>
        <span>
          <h1>Bar Tools</h1>
        </span>
      </NavLink>
      <div className="links">
        <NavLink to="/library">Library</NavLink>
        <NavLink to="/my-shelf">My Shelf</NavLink>
        <NavLink to="/randomizer">Randomizer</NavLink>
        <NavLink to="/recommendations">Recommendations</NavLink>
      </div>
    </nav>
  );
}
