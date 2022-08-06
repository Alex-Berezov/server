import { buildSchema } from 'graphql'

const schema = buildSchema(`
  type Post {
    _id: ID
    postSlug: String
    title: String
    text: String
    imgUrl: String
  }

  input PostInput {
    postSlug: String
    title: String
    text: String
    imgUrl: String
  }

  type Mutation {
    addPost(input: PostInput): Post,
    deletePost(postSlug: String): Post,
  }

  type Query {
    getAllPosts: [Post!]
    getPost(postSlug: String): Post
  }
`)

export default schema