import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import router from './routes/post.routes.js'
import root from './graphql/resolvers/index.js'
import schema from './graphql/schema/index.js'

const app = express()
const PORT = process.env.PORT || 5000

const dbConnect = 'mongodb+srv://aleber:farizda1990@cluster0.rdz49.mongodb.net/blog?retryWrites=true&w=majority'

app.use(express.json({extended: true}))
app.use(cors())
app.use('/api/post', router)

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  rootValue: root,
  schema
}))


const start = async () => {
  try {
    await mongoose.connect(dbConnect, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    app.listen(PORT, () => {
      console.log('Listening on port:' + PORT)
    })
  } catch (error) {
    console.log(error)
  }
}
start()