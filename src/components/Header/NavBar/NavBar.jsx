import frigidForagerLogo from "/src/assets/frigidforagerlogo.png";
import "/src/components/Header/NavBar/NavBar.css"

export default function NavBar() {
    return (
        <div className="NavBar">
            <ul className="NavBarItems">
                <img src={frigidForagerLogo} alt="Frigid Forager Logo" className="FFLogo" />
                <li className="NavBar-Fridge"><a href="#">Recipes</a></li>
                <li className="NavBar-Fridge"><a href="#">Fridge Planner</a></li>
            </ul>
        </div>
    )
}