// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/restaurants`

async function index() {
  try {
    const res = await fetch(BASE_URL)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function show(restaurantId) {
  try {
    const res = await fetch(`${BASE_URL}/${restaurantId}`)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function create(restaurantFormData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(restaurantFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteRestaurant(restaurantId) {
  try {
    const res = await fetch(`${BASE_URL}/${restaurantId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  index,
  show,
  create,
  deleteRestaurant as delete,
}

