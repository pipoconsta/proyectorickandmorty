import { useState, useEffect } from 'react';
import './App.module.css';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Fav from './components/Fav'


function App() {
const location = useLocation();
const [characters, setCharacters] = useState ([])
const navigate = useNavigate();
const [access, setAccess] = useState(false);



async function login (userData) {
  
   try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const {data} = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;
      setAccess(access);
      access && navigate('/home');

  } catch (error) {
      console.log(error.message)
  }
}

const logout = () => {
 setAccess(false);
 navigate('/')
}

useEffect(() => {
   !access && navigate('/');
}, [access]);
 

 async function onSearch(id) {
  try {
   const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`
);
   if (data.name) {
      setCharacters((oldChars) => [...oldChars, data]);
} else {
      alert('¡No hay personajes con este ID!');
}
} catch (error) {
   console.log(error);
}
}


const onClose = (id) => {
 const charactersFiltered = characters.filter(character =>
   character.id !== Number(id))
   setCharacters(charactersFiltered)
}

   return (
      <div className={App}>
         {
            location.pathname !== '/' && <NavBar onSearch={onSearch} logout={logout} /> 
         }
         <Routes>
            <Route path='/' element= {<Form login = {login}/>}/>
            <Route path ='/home' element ={ <Cards characters={characters}
            onClose={onClose}/> }/>
            <Route path='/about' element = {<About/>} />
            <Route path='/detail/:id' element = {<Detail/>}/>
            <Route path ='/favorites' element = {<Fav/>} /> 
         </Routes>

      </div> 
   );
}

export default App;
