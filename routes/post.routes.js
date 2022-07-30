import { Router } from "express"
import Post from '../models/Post.js'

const router = Router()

router.post('/add', async (req, res) => {
  try {
    const { title, text, imgUrl } = req.body

    const post = new Post({ title, text, imgUrl })

    await post.save()
    res.json(post)
  } catch (error) {
    console.log('Add post error >>', error)
  }
})


export default router