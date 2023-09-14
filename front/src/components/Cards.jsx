import Card from './Card';
import style from './Cards.module.css'

export default function Cards({characters, onClose}) {

   return (<div className={style.cardList}>
      {characters.length>0?(

         characters.map(({id, name, status, gender, image, species, origin}) => (
            <Card  
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            image={image}
            origin={origin}
            onClose={onClose} />
         ))
         ):(
            <div>
               
          </div>
         )}
         </div>
   );
}
