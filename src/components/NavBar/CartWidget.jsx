import "./NavBar.scss"
import { FaShoppingBag } from "react-icons/fa";

const CartWidget = () => {

    return (
        <div className="cartWidget m-4">
            <FaShoppingBag color="white" size={27}/>
            <p className="cartContador">1</p>
        </div>
    )
}

export default CartWidget