import CartWidget from "./CartWidget"
import "./NavBar.css"

const NavBar = () => {

    return (
        <div id="navbar">
            <h1 className="logo">Logo</h1>
            <ul>
                <li>
                    <a href="#">Tienda</a>
                </li>
                <li>
                    <a href="#">Servicios</a>
                </li>
                <li>
                    <a href="#">Nosotros</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar