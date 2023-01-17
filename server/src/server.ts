import Fastify from 'fastify'

const app = Fastify()

/**
 * Método HTTP: GET, POST, PUT DELETE
 */

app.get('/', () => {
  return 'Hello World'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server running!')
  })
