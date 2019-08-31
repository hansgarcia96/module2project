const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const spacexSchema = new Schema(
  {
    
    date: String,
    name: String,
    location: String,
    description: String,
    image: {
      type: String,
      default: "https://i.stack.imgur.com/oOE5V.jpg"
    }
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

const SpaceX = mongoose.model("SpaceX", spacexSchema);

module.exports = SpaceX;
