const mongoose = require("mongoose");

let Schema = new mongoose.Schema({
  title: String,
  lang: String,
  slug: String,
  pageID: Number,
  answers: [
    {
      originalLinkOfAnswer: String,
      name: String,
      initials: String,
      answer: [String],
    },
  ],
});

mongoose.models = {};

module.exports = mongoose.models.Page || mongoose.model("Page", Schema);
