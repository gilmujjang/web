const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema({
  userFrom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  movieId: {
    type: String
  },
  movieTitle: {
    type: String
  },
  moviePost: {
    type: String
  },
  movieRunTime: {
    type: String
  }
}, { timestamps: true })


const User = mongoose.model('favorite', favoriteSchema);

module.exports = { Favorite }