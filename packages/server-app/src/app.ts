import express = require('express')
const app = express()

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello World!' })
})

app.listen(8080, () => {
  console.log('Application started on 8080')
})
