import Post from '../../models/Post.js'

const root = {
  getAllPosts: async () => {
    try {
      const postsFetched = await Post.find()
      return postsFetched.map(post => {
        return {
          ...post._doc,
          postSlug: post.postSlug
        }
      })
    } catch (error) {
      console.log('Get posts error on server >>', error)
    }
  },
  getPost: async ({ postSlug }) => {
    try {
      const postFetched = await Post.findOne({postSlug})
      return postFetched
    } catch (error) {
      console.log('Get single post error on server >>', error)
    }
  },
  addPost: async ({ input }) => {
    try {
      const { title, text, imgUrl } = input
      const postSlug = title.toLowerCase().split(' ').join('-')

      const postFetched = await Post.findOne({postSlug}) // Разобраться, как возвращать ошибку по правильному
      if (postFetched) return console.log('Post already exist')

      const post = new Post({ postSlug, title, text, imgUrl })
      const newPost = await post.save()
      return { ...newPost._doc, postSlug: newPost.postSlug }
    } catch (error) {
      console.log('Add post error on server >>', error)
    }
  },
  deletePost: async ({ postSlug }) => {
    try {
      const deletedPost = await Post.findByIdAndDelete(postSlug);
      return {
        ...deletedPost._doc,
        postSlug: deletedPost.postSlug,
      }
    } catch (error) {
      console.log('Delete post error on server >>', error)
    }
  },
}

export default root