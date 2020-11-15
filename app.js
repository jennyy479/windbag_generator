const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const generateWindbag = require('./generate_windbag')
const bodyParser = require('body-parser')
const port = 3000


//body-parser
app.use(bodyParser.urlencoded({ extend: true }))

//define templete
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('index')
})

//post
app.post('/', (req, res) => {
  const options = req.body
  const password = generateWindbag(options)
  res.render('index', { password: password, options: options })
})

app.listen(port, () => {
  console.log(`The express server is running on http://localhost:${port}`)
})