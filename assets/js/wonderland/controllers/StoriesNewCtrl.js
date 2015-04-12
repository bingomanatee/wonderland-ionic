angular.module('Wonderland.controllers')
  .controller('StoriesNewCtrl', ['$scope', 'Stories', '$state', function ($scope, Stories, $state) {
  $scope.newStory = Stories.newStory();
  $scope.genres = Stories.genres();
  $scope.saveStory = function(){
    Stories.saveStory($scope.newStory, function(){
      $state.go('tab.stories');
    });
  }
}]);
