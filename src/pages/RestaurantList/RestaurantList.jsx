// css
import styles from './RestaurantList.module.css'

// components
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'

const RestaurantList = ({restaurants}) => {
    const cuisines = {}
    restaurants.forEach(rest => {
      if (!Object.keys(cuisines).includes(rest.cuisine)){ 
        cuisines[rest.cuisine]= [rest]
      }else {
        cuisines[rest.cuisine].push(rest)
      }
    });
    // sorts cuisine by amount of restaurants
    const cuisinesArray =[]
    for (let cuisine in cuisines){
      cuisinesArray.push([cuisine, cuisines[cuisine]])
    }
    cuisinesArray.sort((a,b)=> b[1].length-a[1].length)
    console.log(cuisinesArray)
    return(
      <>
        <main className={styles.container}>
          {cuisinesArray.map(cuisine => 
              <div key={cuisine[0]} className={styles.cuisine}>
                <div className={styles.bars}><h1>{cuisine[0]}</h1></div>
                {cuisine[1].map(restaurant=> 
                <RestaurantCard restaurant={restaurant} key={restaurant._id} />)}
              </div>
          )}
        </main>
      </>
  )
  }
  

export default RestaurantList