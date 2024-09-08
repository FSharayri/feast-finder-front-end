// npm modules
import { useState, useEffect} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import RestaurantList from './pages/RestaurantList/RestaurantList'
import RestaurantDetails from './pages/RestaurantDetails/RestaurantDetails'
import NewRestaurant from './pages/NewRestaurant/NewRestaurant'

import DishList from './pages/DishList/DishList'

//import DishDetails from './pages/DishDetails/DishDetails'

// components
import NavBar from './components/NavBar/NavBar'
import ExploreBar from './components/ExploreBar/ExploreBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

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
  const [restaurants, setRestaurants] = useState([])
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    //restaurant fetch
    const fetchAllRestrants = async () => {
      const restaurantsData = await restaurantService.index()
      setRestaurants(restaurantsData) 
    }
    fetchAllRestrants()
    //dish fetch
    const fetchAllDishes = async () => {
      const dishesData = await dishService.index()
      setDishes(dishesData)
    }
    fetchAllDishes()
  }, [ ])

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
  
  const handleAddRestaurant = async (restaurantFormData) => {
    const newRestaurant = await restaurantService.create(restaurantFormData)
    setRestaurants([newRestaurant, ...restaurants])
    navigate('/restaurants')
  }

  return (
    <>
      
      <NavBar user={user} handleLogout={handleLogout} />
      <ExploreBar />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/profiles"
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
            <RestaurantDetails 
            user={user} 
            handleDeleteRestaurant = {handleDeleteRestaurant}/> 
          }
        />
        <Route 
          path='/restaurants/new'
          element={
            <ProtectedRoute user={user} >
              <NewRestaurant handleAddRestaurant={handleAddRestaurant} />
            </ProtectedRoute>
          }
        /> 
        <Route
          path="/dishes"
          element={<DishList dishes={dishes} />}
        />
      </Routes>
    </>
  )
}

export default App
