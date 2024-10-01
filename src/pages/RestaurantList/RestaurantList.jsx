import { useState } from 'react'

// css
import styles from './RestaurantList.module.css'

// components
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import CuisineTabBar from '../../components/CuisineTabBar/CuisineTabBar'

const RestaurantList = ({restaurants}) => {
  const [selectedCuisine , setSelectedCuisine] = useState(null);
  const cuisines = {}
  restaurants.forEach(rest => {
    if (!Object.keys(cuisines).includes(rest.cuisine)){ 
      cuisines[rest.cuisine]= [rest]
    }else {
      cuisines[rest.cuisine].push(rest)
    }
  })
  // sorts cuisine by amount of restaurants
  const cuisinesArray =[]
  for (let cuisine in cuisines){
    cuisinesArray.push([cuisine, cuisines[cuisine]])
  }
  cuisinesArray.sort((a,b)=> b[1].length-a[1].length)
  const cuisinesNames = cuisinesArray.map(cuisine=>cuisine[0])
  const filteredCuisine = cuisinesArray?.filter(cuisine => cuisine[0]===selectedCuisine ) 

  return(
    <>
      <CuisineTabBar
        cuisines={cuisinesNames}
        selectedCuisine={selectedCuisine}
        onSelectCuisine={setSelectedCuisine}
      />
      <main className={styles.container}>
        {/*  line below filters cuisines array to find the selected cuisine, then maps over that selected cuisines restaurants for display */}
      {selectedCuisine?
        filteredCuisine?.at(0)?.at(1).map(restaurant=>
            <RestaurantCard restaurant={restaurant} key={restaurant._id} />
            
        )
      :
      // if no cuisine is chosen => all restaurants are displayed
      cuisinesArray.map(cuisine => 
        cuisine[1].map(rest=>
          <RestaurantCard restaurant={rest} key={rest._id} />
        )
      )
    }
  
      </main>
    </>
  )
}


export default RestaurantList