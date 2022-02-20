const express = require('express')
const app = express()

app.get('/who', (req, res) => {
  res.send({service: 'node'})
})

app.listen(3001, function () {
    console.log('Start node localhost:3001');
});