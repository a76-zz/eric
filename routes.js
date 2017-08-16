let routes = require('./routes.json') // Loaded with utils/routes-loader.js

// Resolve path defined as pattern to actual location, for example:
// { path: '/tasks/:id', params: {id: 'load'}} returns /tasks/load
function resolvePath(path, params) {
  let result = path
  for (const key of Object.keys(params)) {
    result = result.replace(`:${key}`, params[key])
  }

  return result
}

// Resolve route by id and return location according to the route's path and parameters
function resolveRoute(id, params) {
  const route = routes.find(route => route.id === id)

  if (route) {
    return resolvePath(route.path, params)
  } else {
    throw new Error(`Route not found by id '${id}'`)
  }
}

function reloadRoutes() {
  routes = require('./routes.json')
  return routes
}

export {
  routes,
  resolveRoute,
  reloadRoutes
}
