const Post = require('../models/post');

const User = require('../models/user');


module.exports.home = async function(req, res){

    try{
        let posts =await  Post.find({})
    .sort('-createdAt')
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        } 

    });

    let users =await User.find({}) 

    return  res.render('home', {
        title: "Codial | Home",
        posts: posts,
        all_users: users
  }) ; 

    }catch(err){
     console.log('Error',err);
     return;
    }

    //populate the user of the each post

};

//module.exports.actionName=function(req,res);

//using then
//Post.find({}).populate('comments').then(function{});

// let posts = Post.find({}).populate('comments').exec();
// posts.then();