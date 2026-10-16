import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BiSolidStar } from "react-icons/bi"

const App = () => {

  const [nota,setNota] = useState(null);
  const [mostrarNota, setMostrarNota] = useState(false);

  return (

    <div className="w-screen h-screen bg-[url('/src\assets\bggatos.webp')] bg-cover bg-right bg-no-repeat flex justify-center items-center">
      <div className="w-80 bg-linear-to-b from-[#8ABFB5] to-[#F2A922] shadow-2xl p-7.5 rounded-xl">
        {
          mostrarNota ? (
            <>
              <div>
              <img src="src\assets\gatoagradece.png" alt="gato agradece" size={50}/>

              </div>
              <h1 className="bg-white/20 rounded-2xl text-pink-500 text-center">Sua nota foi {nota} de 5</h1>
              <p className="text-gray text-center mt-4">Agradecemos por escolher os nossos serviços!</p>
            
            </>
          ):(
            <>
            <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
          <BiSolidStar className="text-pink-500"/>
        </div>
      <h1 className="text-white text-xl font-semibold mt-3 mb-3">Avalie o seu atendimento</h1>
      <p className="text-xs text-gray mb-4">A sua opinião é muito importante para nós. E ela ajuda outros tutores a encontrarem um lugar seguro para cuidar de quem amam.</p>
      <div className="flex justify-between *:w-10 h-10 *:bg-white *:rounded-full *:flex *:justify-center *:items-center *:text-black *:hover:bg-pink-500 *:hover:text-white *:duration-200 *:cursor-pointer *:[&.active]:bg-pink-500 *:[&.active]:text-white">
        <button
          onClick={() => setNota(1)} 
          className={nota == 1 ? "active":""}>1</button>
        <button
          onClick={() => setNota(2)} 
          className={nota == 2 ? "active":""}>2</button>
        <button
          onClick={() => setNota(3)} 
          className={nota == 3 ? "active":""}>3</button>
        <button
          onClick={() => setNota(4)} 
          className={nota == 4 ? "active":""}>4</button>
        <button
          onClick={() => setNota(5)} 
          className={nota == 5 ? "active":""}>5</button>
      </div>
      <button onClick={() => setMostrarNota(true)}
      disabled={nota == null}
      className="w-40 h-10 bg-white rounded-full flex flex-center justify-center items-center ml-12.5 text-black not-disabled:hover:bg-pink-500 hover:text-white duration-200 cursor-pointer mt-4 disabled:opacity-25 disabled:cursor-not-allowed">Enviar</button>
            </>
          )
        }
      </div>
    </div>
  
  )
}

export default App;
