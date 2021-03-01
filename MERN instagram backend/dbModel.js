import mongoose from 'mongoose'

const instance = mongoose.Schema({
  Caption: String,
  user: String,
  image: String,
  comments: [],
})

export default mongoose.model('posts', instance)
