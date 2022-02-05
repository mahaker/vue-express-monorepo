import express from 'express'
import * as core from 'core'

const app = express()

app.get('/api/hello', (req, res) => {
  console.info('Access!', core.add(2, 4))
  res.json({ message: 'Hello World!' })
})

app.listen(8080, () => {
  console.log('Application started on 8080')
})
