angular.module('Wonderland.controllers', [])

  .controller('DashCtrl', function($scope) {
    console.log('dc');
  })

  .controller('FriendsCtrl', function($scope, Friends) {
    console.log('fc');
    $scope.friends = Friends.all();
  })
  .controller('ChatsCtrl', function($scope, Chats) {
    console.log('cc');
    $scope.chats = Chats.all();
  })

  .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
    console.log('fdx');
    $scope.friend = Friends.get($stateParams.friendId);
  })

  .controller('AccountCtrl', function($scope) {
    console.log('ac');
  });
