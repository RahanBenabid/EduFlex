const mongoose = require("mongoose")

const QnASchema = new mongoose.Schema({
  question: String,
  answer: {
    type: String,
    default: "no answer yet..."
  },
  userId: String,
});

const QnA = mongoose.model('QnA', QnASchema);

module.exports = QnA;
