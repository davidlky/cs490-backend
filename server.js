import express from 'express';
import path from 'path';

const app = express()
const port = 3000

// add file here
app.use(express.static('json'))


// if you want u can also add something here
app.get('/inventory', (req, res) => res.sendFile(path.resolve(__dirname, 'json/inventory.json')))


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))