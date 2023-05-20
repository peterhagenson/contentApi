import express from 'express'
import pingRouter from "./routes/pingRouter"
import itemsRouter from "./routes/itemsRouter"
import threadsRouter from "./routes/threadsRouter"
import imagesRouter from "./routes/imagesRouter"
const app = express()
const port = 3000

app.use('/ping', pingRouter)
app.use('/items', itemsRouter)
app.use('/threads', threadsRouter)
app.use('/images', imagesRouter)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})