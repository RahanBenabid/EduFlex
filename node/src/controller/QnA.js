const express = require("express")
const QnA = require("./../models/QnA")

exports.showQnA = async (req, res) => {
  try {
    const users = await QnA.find({});
    console.log(users);
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: 'Server error' });
  }
};


exports.postQnA = async (req, res) => {
  try {
    const { question, userId } = req.body;
    const newQnA = new QnA({
      question,
      userId,
    });
    const savedQnA = await newQnA.save();
    res.status(200).json({ message: "user added successfully", user: savedQnA });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Failed to register user" });
  }
};