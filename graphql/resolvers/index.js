import Post from '../../models/Post.js'

const root = {
  getAllPosts: async () => {
    try {
      const postsFetched = await Post.find()
      return postsFetched.map(post => {
        return {
          ...post._doc,
          _id: post.id
        }
      })
    } catch (error) {
      console.log('Get posts error on server >>', error)
    }
  },
  getPost: async ({ id }) => {
    try {
      const postFetched = await Post.findById(id)
      return postFetched
    } catch (error) {
      console.log('Get single post error on server >>', error)
    }
  },
  addPost: async ({ input }) => {
    try {
      const { title, text, imgUrl } = input
      const post = new Post({ title, text, imgUrl })
      const newPost = await post.save()
      return { ...newPost._doc, _id: newPost.id }
    } catch (error) {
      console.log('Add post error on server >>', error)
    }
  },
  deletePost: async ({ _id }) => {
    try {
      const deletedPost = await Post.findByIdAndDelete(_id);
      return {
        ...deletedPost._doc,
        _id: deletedPost.id,
      }
    } catch (error) {
      console.log('Delete post error on server >>', error)
    }
  },
}

export default root