import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import indexRoutes from './routes/index.js'
import { config } from 'dotenv'

config();

const app = express();
const port = process.env.PORT;
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs');

console.log(join(__dirname, 'views'))

app.use(indexRoutes)
app.use(express.static(join(__dirname, 'public')))
app.use((request, response, next) => {
  response.status(404).render('404-page');
})

app.listen(port);

console.log(`Local Server: ${port}`);