const posts = require("../models/data");

const controller = {
  getAll: (req, res, next) => {
    const itemsPerPage = 19;
    const requestedPage = req.query.page - 1 || 0;
    const startIndex = requestedPage * itemsPerPage;
    const endIndex = itemsPerPage + startIndex;
    const paginatedPosts = posts.filter(
      (post, index) => index >= startIndex && index < endIndex
    );
    res.status(200).json({ posts: paginatedPosts });
  },

};

module.exports = controller;
