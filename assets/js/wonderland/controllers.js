angular.module('Wonderland.controllers', [])

  .controller('DashCtrl', function ($scope) {

  })

  .controller('FriendsCtrl', function ($scope, Friends) {

    $scope.friends = Friends.all();
  })
  .controller('ChatsCtrl', function ($scope, Chats) {

    $scope.chats = Chats.all();
  })

  .controller('FriendDetailCtrl', function ($scope, $stateParams, Friends) {

    $scope.friend = Friends.get($stateParams.friendId);
  })

  .controller('AccountCtrl', function ($scope) {

  })
  .controller('TabCtrl', ['$scope', 'SizeWatcher', function ($scope, SizeWatcher) {
    var PHONE_WIDTH = 568;

    function _tabClasses() {
      return [
        'tabs-icon-top',
        'tabs-positive',
        SizeWatcher.size().w > PHONE_WIDTH ? 'tabs-top' : ''
      ].join(' ');
    };

    $scope.tab_classes = _tabClasses();

    SizeWatcher.subscribe(function () {
      $scope.tab_classes = _tabClasses();
    }, $scope);

  }]);
