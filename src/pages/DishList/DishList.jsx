import { useState } from 'react'


// css
import styles from './DishList.module.css'

//components 
import DishCard from '../../components/DishCard/DishCard';

const DishList = ({dishes}) => {
  const [selectedCuisine , setSelectedCuisine] = useState(null);
  const cuisines = {}
  dishes.forEach(dish => {
    if (!Object.keys(cuisines).includes(dish.restaurant.cuisine)){ 
      cuisines[dish.restaurant.cuisine]= [dish]
    }else {
      cuisines[dish.restaurant.cuisine].push(dish)
    }
  })
  const cuisinesArray =[]
    for (let cuisine in cuisines){
      cuisinesArray.push([cuisine, cuisines[cuisine]])
    }
  return ( 
    <main className={styles.container}>
      {dishes.map(dish=>
        <DishCard dish={dish} key={dish._id}/>
      )}
    </main>
  );
}

export default DishList;