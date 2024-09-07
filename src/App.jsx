function App() {
  const [user, setUser] = useState(authService.
  getUser())
  const navigate = useNavigate()
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const fetchAllRestrants = async () => {
      const restaurantsData = await restaurantService.index()
      setRestaurants(restaurantsData) 
    }
    fetchAllRestrants() 
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
    // const deletedBlog <-- The delete service function will go here shortly
    setRestaurants(restaurants.filter(restaurant => restaurant._id !== deletedRestaurant._id))
    navigate('/restaurants')
  }

  return (
    <>
      <h1>HELLO!</h1>
      <NavBar user={user} handleLogout={handleLogout} />
      
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
              <RestaurantDetails user={user} handleDeleteRestaurant = {handleDeleteRestaurant}/> 
          }
        /> 
      </Routes>
    </>
  )
}
