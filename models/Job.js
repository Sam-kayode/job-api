const { string } = require("joi");
const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Pls provide company name"],
      maxLength: 50,
    },
    position: {
      type: String,
      required: [true, "Pls provide position"],
      maxLength: 100,
    },
    status: {
      type: String,
      enum: ["Interview", "declined", "pending"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Pls provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
