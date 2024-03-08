const express = require('express')
const path=require('path')
const app = express()
const port = 3000
const multer=require('multer')
const upload=multer({dest:'uploads/'})
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"templates/index.html"))
})
app.post('/merge', upload.array('pdfs', 3), function (req, res, next) {
  res.send({data:req.files})
})
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost/${port}`)
})