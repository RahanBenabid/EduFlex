const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    unique: false,
  },
  password: String,
  role: {
    type: String,
    enum: ["admin", "customer"],
    default: "customer",
  },
  todos: [{
    content: String,
    status: {
      type: String,
      enum: ["Incomplete", "Complete"],
      default: "Incomplete",
    },
  }],
  completedCourses: [{ type: Schema.Types.ObjectId, ref: 'OnlineCourse' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
