'use strict';

var FriendModel = require('./friendModel');

module.exports = {
	getFriends: function(req, res){
		FriendModel.find().exec(function(err, friends){
			res.send(friends);
		});
		

	},

	addFriend: function(req, res){
		var newFriend = new FriendModel(req.body);
		newFriend.save(function (err){
			if(err){
				res.send(err);
			} else {
				res.status(200).send(req.body.name + " was successfuly added to your friends list")
			}
		});

	},

	unFriend: function(req, res){
		FriendModel.remove({_id: req.params.id}, function(err){
			if(err){
				res.send(err);
			} else {
				res.status(200).send("Friend was removed")
			
		}
		});
	}
}