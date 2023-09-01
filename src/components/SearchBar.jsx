import { useState } from "react";
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   const {onSearch} = props;

   const [Id, setId] = useState(""); 
   const handleChange = (event) => {
    setId(event.target.value)
   }
   


   return (
      <div>
         <input type='search' onChange={handleChange} value={Id} />
         <button
  onClick={() => onSearch(Id)}
  className={styles.placeholderButton}>AGREGAR</button>
      </div>
   );
}
