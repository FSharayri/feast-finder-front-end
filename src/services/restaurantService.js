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

async function create(restaurantFormData, photoData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
      body: JSON.stringify(restaurantFormData)
    })
    const json = await res.json()
    if (json.err) throw new Error(json.err)
    if (json.token) 
      tokenService.setToken(json.token)
    if (photoData) {
      const  photoRes = await addPhoto(photoData, json._id)
      json.photo = photoRes
    }
    return json
  } catch (err) {
    throw new Error(err)
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

async function update(restaurantFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${restaurantFormData._id}`, {
      method: 'PUT',
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

async function addPhoto(photoData, restaurantId) {
  try {
    const photoFormData = new FormData()
    photoFormData.append('photo', photoData)
    const res = await fetch(`${BASE_URL}/${restaurantId}/add-photo`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: photoFormData,
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

export {
  index,
  show,
  create,
  deleteRestaurant as delete,
  addPhoto,
  update,
}