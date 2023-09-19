import frigidForagerLogo from "/src/assets/fflogo.png";
import "/src/components/Header/NavBar/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <ul className="navbar-items">
        <img src={frigidForagerLogo} alt="Frigid Forager Logo" className="FFLogo" />
        <li className="navbar-links"><Link to={`/recipes`}>Recipes</Link></li>
        <li className="navbar-links"><Link to={`/stock-up-form`}>Stock Up</Link></li>
        <li className="navbar-links"><Link to={`/inventory`}>Inventory</Link></li>
      </ul>
    </div>
  );
}
