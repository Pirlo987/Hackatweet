var express = require("express");
var router = express.Router();

require("../models/connection");
const Tweet = require("../models/tweet");
const User = require("../models/users");

router.post("/post", (req, res) => {
  User.findOne({ token: req.body.token }).then((data) => {
    if (data) {
      let listHashtag = [];
      let text = req.body.tweet;
      if (text.includes("#")) {
        //méthode pour récup #
        listHashtag = text.match(/(#\w+[^\s#]*)/g);
      }

      const newTweet = new Tweet({
        user: data._id,
        tweet: req.body.tweet,
        hashtag: listHashtag,
        like: [],
      });
      newTweet.save().then((newtwee) => {
        res.json({ result: true });
      });
    }
  });
});

router.get("/wall", (req, res) => {
  Tweet.find()
  .populate('user')
  .then((data) => {
    res.json({ tweet: data });
  });
});



router.get("/hashtag", (req, res) => {
  Tweet.find({}, "hashtag").then((tweets) => {
    let allHashtags = [];
    tweets.forEach((Tweet) => {
      allHashtags = allHashtags.concat(Tweet.hashtag);
    });
    res.json({ succees: true, hashtag: allHashtags });
  });
});



module.exports = router;
