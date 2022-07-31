import Router from "express"
import Post from '../models/Post.js'

const router = Router()

router.post('/add', async (req, res) => {
  try {
    const { title, text, imgUrl } = req.body

    const post = new Post({ title, text, imgUrl })

    await post.save()
    res.json(post)
  } catch (error) {
    console.log('Add post error on server >>', error)
  }
})

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (error) {
    console.log('Get posts error on server >>', error)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id)
    res.json(post)
  } catch (error) {
    console.log('Get single post error on server >>', error)
  }
})

router.post('/remove', async (req, res) => {
  try {
    const  { id } = req.body
    await Post.findOneAndDelete(id)
    res.json({ message: 'Post was deleted' })
  } catch (error) {
    console.log('Delete post error on server >>', error)
  }
})

export default router