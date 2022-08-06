import pkg from 'mongoose'

const { Schema, model } = pkg

const postSchema = new Schema({
  postSlug: {type: String, require: true},
  title: {type: String, require: true},
  text: {type: String, require: true},
  imgUrl: {type: String, require: true}
})

export default model('Post', postSchema)