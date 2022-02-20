const express = require('express')
const app = express()

app.get('/node', (req, res) => {
  res.send({service: 'node'})
})

app.listen(3001, function () {
    console.log('Start node localhost:3001');
});