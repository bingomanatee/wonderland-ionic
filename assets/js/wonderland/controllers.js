angular.module('Wonderland.controllers', [])

  .controller('DashCtrl', function($scope) {
    console.log('dc');
  })

  .controller('FriendsCtrl', function($scope, Friends) {
    console.log('fc');
    $scope.friends = Friends.all();
  })

  .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
    console.log('fdx');
    $scope.friend = Friends.get($stateParams.friendId);
  })

  .controller('AccountCtrl', function($scope) {
    console.log('ac');
  });
