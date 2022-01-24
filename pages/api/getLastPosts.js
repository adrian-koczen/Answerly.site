const mongoose = require("mongoose");
const Page = require("./models/Page");

const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  await mongoose.connect(process.env.mongodburl);
  return handler(req, res);
};

async function handler(req, res) {
  const lang = req.body.lang;
  try {
    let posts = await Page.find({ lang: lang }).limit(10).select("title slug");
    if (posts == null) {
      return res.status(500).end();
    }
    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500);
  }
}

export default connectDB(handler);
