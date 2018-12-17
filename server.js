const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.sendFile('index.html', {root: __dirname}))

app.use("/css", express.static('css'))
app.use("/images", express.static('images'))
app.use("/js", express.static('js'))
app.use("/vendor", express.static('vendor'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
