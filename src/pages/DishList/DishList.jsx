import { useState } from 'react'


// css
import styles from './DishList.module.css'

//components 
import DishCard from '../../components/DishCard/DishCard';

const DishList = ({dishes}) => {
  const [selectedCuisine , setSelectedCuisine] = useState(null);
  return ( 
    <main className={styles.container}>
      {dishes.map(dish=>
        <DishCard dish={dish} key={dish._id}/>
      )}
    </main>
  );
}

export default DishList;