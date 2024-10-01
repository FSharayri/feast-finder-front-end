import { useState } from 'react'


// css
import styles from './DishList.module.css'

//components 
import DishCard from '../../components/DishCard/DishCard';
import CuisineTabBar from '../../components/CuisineTabBar/CuisineTabBar'

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
  cuisinesArray.sort((a,b)=> b[1].length-a[1].length)
  const cuisinesNames = cuisinesArray.map(cuisine=>cuisine[0])
  const filteredCuisine = cuisinesArray?.filter(cuisine => cuisine[0]===selectedCuisine ) 
  return ( 
    <><CuisineTabBar
        cuisines={cuisinesNames}
        selectedCuisine={selectedCuisine}
        onSelectCuisine={setSelectedCuisine}
    />
    <main className={styles.container}>
      {dishes.map(dish=>
        <DishCard dish={dish} key={dish._id}/>
      )}
      {selectedCuisine?
      filteredCuisine?.at(0).at(1).map(dish=>
        <DishCard dish={dish} key={dish._id}/>
      )
      :
      cuisinesArray.map(cuisine=>
        cuisine[1].map(dish=>
          <DishCard dish={dish} key={dish._id}/>
        )
      )
      }
    </main>
    </>
  );
}

export default DishList;