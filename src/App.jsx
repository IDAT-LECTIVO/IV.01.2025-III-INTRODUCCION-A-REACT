import { useEffect, useState } from 'react'
import { Card } from './components/Card'

import './App.css'

const MODULOS = [
  { title: 'Módulo de Usuario', description: 'Este modulo es de usuario', },
  { title: 'Módulo de Productos', description: 'Este modulo es de productos', },
  { title: 'Módulo de Finanzas', description: 'Este modulo es de finanzas', },
  { title: 'Módulo de Reporte', description: 'Este modulo es de Reporte', },
  { title: 'Módulo de Ventas', description: 'Ventas para la tienda en mayor ganancias' }
]

function App() {
  const [name, setName] = useState('')
  const [isActive, setIsActive] = useState(false)

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchPokemon = async () => {
      const { results, count, next } = await fetch('https://pokeapi.co/api/v2/pokemon')
        .then((e) => e.json())

      setPokemons(results)
    }
    fetchPokemon()
  }, [])

  return (
    <>
      <div className='list-pokemons'>
        {
          pokemons.map((e) => (
            <Card title={e.name} description={e.url} />
          ))
        }
      </div>
    </>
  )
}

export default App
