var express = require('express');
var router = express.Router();
var Likes = require('../../modal/Likes');
var Blog = require('../../modal/Blogs');
router.post('/setLike',function(request,respond){
  console.log("inside post like");
  console.log(request.body.BlogTitle);
  console.log(request.body.Username);
  console.log(request.body.Like);
  var likedblog = new Likes();
  likedblog.BlogTitle = request.body.BlogTitle;
  likedblog.Username = request.body.Username;
  likedblog.Like = request.body.Like;
  likedblog.save(function(err) {
      if (err){
      respond.send(err);
        }else{
          Blog.find({Title: request.body.BlogTitle}, function (err, user) {
            console.log(user);
            console.log(user.Title);
              Blog.update({Title : request.body.Title},{$inc : {Likes : 1}});
          });
      respond.json({ message: 'Liked added!' });
      }
    });
});

module.exports = router;
