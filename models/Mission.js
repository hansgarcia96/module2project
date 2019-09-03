const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const missionSchema = new Schema(
  {
    missionName: String,
    date: String,
    name: String,
    location: String,
    pictures: String,
    video: String,
    article: String,
    youtube: String,
    details: String

    // Example for accesing the User Model
    // creator: { type: Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: true
  }
);

const Mission = mongoose.model("Mission", missionSchema);

module.exports = Mission;
