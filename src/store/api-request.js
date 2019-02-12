const API_DOMAIN = 'http://jsonplaceholder.typicode.com/'

let api = async (method, path, data) => {
  let response = await fetch(API_DOMAIN + path, {
    method,
    body: data ? JSON.stringify(data) : null
  })

  return response.json()
}

export default api
