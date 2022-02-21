const express = require ('express')
const path = require ('path')
const app = express()
const port = 3000

// === Controllers === //
const indexRouter = require ('./routes/index')
const tabuadaRouter = require ('./routes/tabuada')

app.use(express.static('public'))

// === View Engine === //
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use ('/', indexRouter)
app.use ('/tabuadas', tabuadaRouter)

app.listen(port, () => console.log(`Tabuada server on port: ${port}`))