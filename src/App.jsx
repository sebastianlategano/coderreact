import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar/NavBar";
import './App.css'


function App() {


  return (
    /*Esto es un fragment <> </>, para no tener etiquetas padre*/
    <>
      <div id='app'>
        <NavBar />
        <ItemListContainer saludo={"Bienvenidos a mi e-commerce"} />
      </div>
    </>
  )
}

export default App;