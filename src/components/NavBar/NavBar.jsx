import CartWidget from "./CartWidget"
import { FaReact } from "react-icons/fa";
import "./NavBar.scss"

const NavBar = () => {

    return (
        <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
                <FaReact color="white" size={27}/>
                <a class="navbar-brand me-5 ms-2" href="#">Logo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        <a class="nav-link" href="#">Tienda</a>
                        <a class="nav-link" href="#">Acerca de nosotros</a>
                        <a class="nav-link" href="#">Contacto</a>

                    </div>
                    <CartWidget />
                </div>
            </div>

        </nav>
    )
}

export default NavBar