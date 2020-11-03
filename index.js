const express = require('express')

const app = express()

app.get('/', (request, response) => {
  return response.send('¯\_(ツ)_/¯')
})

app.all('*', (request, response) => {
  return response.status(404).send('wrong')
})

app.listen(1337)

