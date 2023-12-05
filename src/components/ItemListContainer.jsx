import React from 'react';
import './ItemListContainer.scss'; // Importa el archivo CSS para los estilos

const ItemListContainer = ({ saludo }) => {

    return (
        <div className="item-list-container">
            <p>{saludo}</p>
        </div>
    )
}

export default ItemListContainer