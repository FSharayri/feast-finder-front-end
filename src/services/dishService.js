// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/dishes`

async function index(){
  try {
    const res = await fetch(BASE_URL)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function show(dishId) {
  try {
    const res = await fetch(`${BASE_URL}/${dishId}`)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteDish(dishId) {
  try {
    const res = await fetch(`${BASE_URL}/${dishId}`, {
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

async function create(dishFormData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dishFormData),
    })
    const json = await res.json()
    if (json.err) throw new Error(json.err)
    if (json.token) tokenService.setToken(json.token) 
  }catch (err) {
    throw new Error(err)
  }
}

async function update(dishFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${dishFormData._id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dishFormData),
    })
    const json = await res.json()
    if (json.err) throw new Error(json.err)
    if (json.token) tokenService.setToken(json.token) 
  }catch (err) {
    throw new Error(err)
  }
}


export {
  index,
  show,
  deleteDish as delete,
  create,
  update,
}

