angular.module('Wonderland.services')
  .factory('SizeWatcher', ['$window', 'EventEmitter', function ($window, EventEmitter) {
  var RESIZED_EVENT = 'resized';
  var w = angular.element($window);

  function windowDim() {
    return {
      'h': $window.innerHeight,
      'w': $window.innerWidth
    };
  }

  var lastDim = windowDim();

  w.bind('resize', function () {
    watcher.emit(RESIZED_EVENT, lastDim = windowDim());
  });

  var watcher = new EventEmitter();
  watcher.on('__resize', function () {
    watcher.emit(RESIZED_EVENT, windowDim);
  });

  var subscriber = {
    subscribe: function (handler, scope) {
      watcher.on(RESIZED_EVENT, handler);
      if (scope) {
        scope.$on('$destroy', function () {
          subscriber.unsubscribe(handler);
        })
      }
      handler(lastDim);
    },
    size: function(){
      return angular.copy(lastDim);
    },
    unsubscribe: function (handler) {
      watcher.removeListener(RESIZED_EVENT, handler);
    }
  };

  return subscriber;
}])
