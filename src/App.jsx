// npm modules
import { useState, useEffect} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import RestaurantList from './pages/RestaurantList/RestaurantList'
import RestaurantDetails from './pages/RestaurantDetails/RestaurantDetails'
import NewRestaurant from './pages/NewRestaurant/NewRestaurant'
import EditRestaurant from './pages/EditRestaurant/EditRestaurant'
import DishList from './pages/DishList/DishList'
import DishDetails from './pages/DishDetails/DishDetails'
import EditDish from './pages/EditDish/EditDish'
import NewDish from './pages/NewDish/NewDish'

// components
import NavBar from './components/NavBar/NavBar'
import ExploreBar from './components/ExploreBar/ExploreBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import EditReview from './pages/EditReview/EditReview'

// services
import * as authService from './services/authService'
import * as restaurantService from './services/restaurantService'
import * as dishService from './services/dishService'

// styles
import './App.css'

function App() {
  const [user, setUser] = useState(authService.
  getUser())
  const navigate = useNavigate()
  //states
  const [restaurants, setRestaurants] = useState([])
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    //restaurant fetch
    const fetchAllRestrants = async () => {
      const restaurantsData = await restaurantService.index()
      setRestaurants(restaurantsData) 
    }
    fetchAllRestrants()
    // dish fetch
    const fetchAllDishes = async () => {
      const dishesData = await dishService.index()
      setDishes(dishesData)
    }
    fetchAllDishes()
  }, [])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }
  
  const handleDeleteRestaurant = async (restaurantId) => {
    const deletedRestaurant = await restaurantService.delete(restaurantId)
    setRestaurants(restaurants.filter(restaurant => restaurant._id !== deletedRestaurant._id))
    navigate('/restaurants')
  }
  
  const handleAddRestaurant = async (restaurantFormData, photo) => {
    const newRestaurant = await restaurantService.create(restaurantFormData, photo)
    console.log(newRestaurant._id)
    setRestaurants([newRestaurant, ...restaurants])
    navigate('/restaurants')
  }

  const handleUpdateRestaurant = async (restaurantFormData) => {
    const updatedRestaurant = await restaurantService.update(restaurantFormData)
    setRestaurants(restaurants.map((restaurant) => restaurant._id === updatedRestaurant._id ? updatedRestaurant : restaurant))
    navigate(`/restaurants/${updatedRestaurant._id}`)
  }

  const handleUpdateDish = async (dishFormData) => {
    const updatedDish = await dishService.update(dishFormData)
    setDishes(dishes.map((dish) => dish._id === updatedDish._id ? updatedDish : dish))
    navigate('/dishes')
  }

  const handleDeleteDish = async (dishId) => {
    const deletedDish = await dishService.delete(dishId)
    setDishes(dishes.filter(dish => dish._id !== deletedDish._id))
    navigate('/dishes')
  }

  const handleAddDish = async (dishFormData,photo) => {
    const newDish = await dishService.create(dishFormData,photo)
    //updates the restaurant this dish was added to 
    const restaurantId = dishFormData.restaurant
    const restaurantDishes = dishes.filter(dish=>dish.restaurant===restaurantId)
    const restaurantFormData = {
      _id : restaurantId,
      dishes: restaurantDishes
    }
    handleUpdateRestaurant(restaurantFormData)
    setDishes([newDish, ...dishes])
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <ExploreBar />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/restaurants"
          element={
          <RestaurantList restaurants={restaurants}/>
          }
        />
        <Route
          path="/restaurants/:restaurantId"
          element={
            <ProtectedRoute user={user}>
            <RestaurantDetails 
            user={user} 
            handleDeleteRestaurant = {handleDeleteRestaurant}/> 
            </ProtectedRoute>
          }
        />
        <Route 
          path="/restaurants/new"
          element={
            <ProtectedRoute user={user} >
              <NewRestaurant handleAddRestaurant={handleAddRestaurant} />
            </ProtectedRoute>
          }
        /> 
        <Route 
          path="/restaurants/:restaurantId/edit" 
          element={
            <ProtectedRoute user={user}>
              <EditRestaurant handleUpdateRestaurant={handleUpdateRestaurant}/>
            </ProtectedRoute>
          } 
        />
        <Route
          path="/dishes"
          element={<DishList dishes={dishes} />
        }
        />
        <Route
          path="/dishes/:dishId"
          element={
            <ProtectedRoute user={user}>
            <DishDetails user={user} handleDeleteDish={handleDeleteDish} />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/dishes/:dishId/edit" 
          element={
            <ProtectedRoute user={user}>
              <EditDish handleUpdateDish={handleUpdateDish}/>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dishes/new"
          element={
            <ProtectedRoute user={user} >
              <NewDish handleAddDish={handleAddDish} restaurants={restaurants} user={user}/>
            </ProtectedRoute>
          }
        />
        <Route path="/dishes/:dishId/reviews/edit" element={
          <ProtectedRoute user={user}>
            <EditReview />
          </ProtectedRoute>
        }/>
      </Routes>
    </>
  )
}

export default App
*