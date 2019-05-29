import axios from "axios"

const REQUEST_PRODUCTS = "REQUEST_PRODUCTS"

const initialState = {
  products: []
}

export function requestProducts() {
  let data = axios.get("/api/products").then(res => res.data)
  return {
    type: REQUEST_PRODUCTS,
    payload: data
  }
}

export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case `${REQUEST_PRODUCTS}_FULFILLED`:
      return { ...state, products: payload }
    default:
      return state
  }
}