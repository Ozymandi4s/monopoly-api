import { app } from './app'

const port = process.env.PORT || 8080

const server = app.listen(port, () => console.log(`Server listening on ${port}`))

process.on('SIGINT', () => {
    server.close()
    console.log('Server closed')
})


