var app = angular.module('fullestStack');

app.controller('FriendsController', function($scope, FriendsService) {

  $scope.getFriends = function() {
    FriendsService.getFriends().then(function(friends) {
      $scope.friends = friends;
      console.log($scope.friends);
    });
  };

  $scope.addFriend = function() {
    FriendsService.addFriend($scope.friend).then(function(res) {
      $scope.getFriends();
      })
  };

  $scope.getFriends();

  $scope.unFriend = function(friend){
    FriendsService.unFriend(friend).then(function(response){
      $scope.getFriends();
    })
  }



});
