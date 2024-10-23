const mongoose = require("mongoose");

const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
});
