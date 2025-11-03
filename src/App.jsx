import './App.css'
import EmpleadoList from "./components/EmpleadoList"

function App() {


  return (
    <>
      <main className='container'>
        <h1 className='text-center py-3 display-4 text-secondary'>Lista de Empleados</h1>
        <EmpleadoList></EmpleadoList>
      </main>
    </>
  )
}

export default App
