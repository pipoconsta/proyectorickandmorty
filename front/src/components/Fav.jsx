import React, { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import Card from "./Card"; 
import {filterCards, orderCards } from "../redux/actions"; 
import style from './Fav.module.css'

function Favorites() {
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false)


   const handleOrder = (event) =>{
   dispatch(orderCards(event.target.value));
   setAux(!aux)
   }
   const handleFilter = (event) =>{
   dispatch(filterCards(event.target.value))
   }



  return (
    <div className={style.cardList}>
      <div className={style.selectContainer}>
      <select onChange={handleOrder}>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      </div>
      <div className={style.cardContainer}>
        {favorites.map(({id, name, status, gender, image, species, origin, onClose}) => (
          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            image={image}
            origin={origin}
            onClose={onClose}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;