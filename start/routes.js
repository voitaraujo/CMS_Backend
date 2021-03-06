'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { message: 'API rodando!' }
})

Route.post('/sessions', 'SessionController.Authenticate')
Route.post('/forgot', 'SessionController.ResetEmail')
Route.post('/reset', 'SessionController.ResetPassword')

Route.group(() => {
  Route.get('/monitor', 'MonitoringController.receive')
}).middleware(['auth'])
