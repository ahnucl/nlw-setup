import cors from '@fastify/cors'
import Fastify from 'fastify'
import { appRoutes } from './route'

const app = Fastify()

app.register(cors) // Qualquer aplicação pode consumir esse back-end
app.register(appRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server running!')
  })
