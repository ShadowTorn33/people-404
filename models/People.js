const mongoose = require("mongoose");

const peopleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      unique: true,
    },
    image: {
      type: String,
      maxLength: [250, "Exceeded max length of 250 characters"],
      default:
        "https://img.freepik.com/premium-vector/male-avatar-icon-unknown-anonymous-person-def[…]ted-white-background-vector-illustration_735449-120.jpg?w=360",
    },
    title: {
      type: String,
      maxLength: [30, "Exceeded max length of 30 characters"],
      required: [true, "title is required"],
    },
  },
  { timestamps: true }
);

const People = mongoose.model("People", peopleSchema);

module.exports = People;
