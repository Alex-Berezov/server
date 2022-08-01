import { buildSchema } from 'graphql'

const schema = buildSchema(`
  type Post {
    _id: ID
    title: String
    text: String
    imgUrl: String
  }

  input PostInput {
    title: String
    text: String
    imgUrl: String
  }

  type Mutation {
    addPost(input: PostInput): Post,
    deletePost(_id: String): Post,
  }

  type Query {
    getAllPosts: [Post!]
    getPost(id: ID): Post
  }
`)

export default schema