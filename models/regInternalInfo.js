import mongoose from "mongoose";

const regInternalSchema = new mongoose.Schema({
  name: String,
  userType: String,
  hourEnter: String,
  hourLeft: String,
  createdAt: {
    type: Date,
    default: new Date().toLocaleString("en-US", {
      timeZone: "America/Sao_Paulo",
    }),
  },
});

const regInternal =
  mongoose.models.regInternal ||
  mongoose.model("regInternal", regInternalSchema);

export default regInternal;
