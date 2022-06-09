import React, { useEffect, useState } from 'react';
import Header from "./components/Header";
import './App.css';
import CardUser from './components/CardUser';

function App() {
  const [username, setUsername] = useState('')//state1
  const [listUsers, setListUsers] = useState([])//state2
  const [count, setCount] = useState([])//state3

  useEffect(() => {
    setCount(listUsers.length)
  }, [listUsers])

  const handleClick = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((json) => {
        const { url, login, name, avatar_url, bio } = json
        console.log(name)
        const lista = listUsers
        lista.push({ url, login, name, avatar_url, bio })
        setListUsers(lista)
        setCount(listUsers.length)
      })

  }

  return (
    <div className="principal">
      <Header />
      <div className='barra-pesquisa'>
        <input type="text" placeholder='Digite o nome do usuário' onChange={(e) => setUsername(e.target.value)} value={username} />
        <button className='searchButton' onClick={handleClick}> Pesquisar </button>
      </div>

      {
        listUsers.map(user => (
          <CardUser info={user} />
        )
        )
      }



      <div>
        <h1>contagem de cards: {count}</h1>
      </div>
    </div>
  );
}

export default App;
