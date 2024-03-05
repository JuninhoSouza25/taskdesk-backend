const mongoose = require("mongoose");

const { Schema } = mongoose;

const ImageSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  src: {
    type: String,
    required: true
  }
});

const Image = mongoose.model("Image", ImageSchema);

module.exports = {
  Image,
  ImageSchema
}