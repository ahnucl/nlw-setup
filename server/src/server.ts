import cors from '@fastify/cors'
import Fastify from 'fastify'
import { appRoutes } from './route'

const listenConfig = process.env.PUBLIC_HOST
  ? {
      host: '0.0.0.0',
      port: 3333,
    }
  : {
      port: 3333,
    }

const app = Fastify()

app.register(cors) // Qualquer aplicação pode consumir esse back-end
app.register(appRoutes)

app.listen(listenConfig).then(() => {
  console.log('HTTP Server running!')
})
