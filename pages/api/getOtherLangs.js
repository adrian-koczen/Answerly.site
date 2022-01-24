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
  const pageID = req.body.pageID;
  try {
    let post = await Page.find({ pageID: pageID }).select("slug lang");
    if (post == null) {
      return res.status(500).end();
    }
    return res.status(200).json(post);
  } catch (err) {
    return res.status(500);
  }
}

export default connectDB(handler);
