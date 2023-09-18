import frigidForagerLogo from "/src/assets/frigidforagerlogo.png";
import "/src/components/Header/NavBar/NavBar.css"

export default function NavBar() {
    return (
        <div className="navbar">
            <ul className="navbar-items">
                <img src={frigidForagerLogo} alt="Frigid Forager Logo" className="FFLogo" />
                <li className="navbar-links"><a href="#">Recipes</a></li>
                <li className="navbar-links"><a href="#">Fridge Planner</a></li>
                <li className="navbar-links"><a href="#">Your Fridge</a></li>
            </ul>
        </div>
    )
}