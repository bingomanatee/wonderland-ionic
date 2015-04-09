angular.module('Wonderland.services', [])

/**
 * A simple example service that returns some data.
 */
  .factory('Friends', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var friends = [
      {id: 0, name: 'Scruff McGruff'},
      {id: 1, name: 'G.I. Joe'},
      {id: 2, name: 'Miss Frizzle'},
      {id: 3, name: 'Ash Ketchum'}
    ];

    return {
      all: function () {
        return friends;
      },
      get: function (friendId) {
        // Simple index lookup
        return friends[friendId];
      }
    }
  })

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
  .factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [
      {id: 0, user: 1, msg: 'foo is bar'},
      {id: 1, user: 0, msg: 'foo is not bar'},
      {id: 2, user: 1, msg: 'foo is foo'},
      {id: 3, user: 2, msg: 'bar is bar'}
    ];

    return {
      all: function () {
        return chats;
      },
      get: function (chatId) {
        // Simple index lookup
        return chats[chatId];
      }
    }
  })
  .service('EventEmitter', function () {
    var util = angular;

    function EventEmitter() {
      EventEmitter.init.call(this);
    }

    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._maxListeners = undefined;
    EventEmitter.defaultMaxListeners = 10;
    EventEmitter.init = function () {
      this._events = this._events || {};
      this._maxListeners = this._maxListeners || undefined;
    };
    EventEmitter.prototype.setMaxListeners = function (n) {
      if (!util.isNumber(n) || n < 0 || isNaN(n)) {
        throw TypeError('n must be a positive number');
      }
      this._maxListeners = n;
      return this;
    };
    EventEmitter.prototype.emit = function (type) {
      var er, handler, len, args, i, listeners;
      if (!this._events) {
        this._events = {};
      }
      if (type === 'error' && !this._events.error) {
        er = arguments[1];
        if (er instanceof Error) {
          throw er;
        } else {
          throw Error('Uncaught, unspecified "error" event.');
        }
        return false;
      }
      handler = this._events[type];
      if (util.isUndefined(handler)) {
        return false;
      }
      if (util.isFunction(handler)) {
        switch (arguments.length) {
          case 1:
            handler.call(this);
            break;
          case 2:
            handler.call(this, arguments[1]);
            break;
          case 3:
            handler.call(this, arguments[1], arguments[2]);
            break;
          default:
            len = arguments.length;
            args = new Array(len - 1);
            for (i = 1; i < len; i++)
              args[i - 1] = arguments[i];
            handler.apply(this, args);
        }
      } else if (util.isObject(handler)) {
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        listeners = handler.slice();
        len = listeners.length;
        for (i = 0; i < len; i++)
          listeners[i].apply(this, args);
      }
      return true;
    };
    EventEmitter.prototype.addListener = function (type, listener) {
      var m;
      if (!util.isFunction(listener)) {
        throw TypeError('listener must be a function');
      }
      if (!this._events) {
        this._events = {};
      }
      if (this._events.newListener) {
        this.emit('newListener', type, util.isFunction(listener.listener) ? listener.listener : listener);
      }
      if (!this._events[type]) {
        this._events[type] = listener;
      } else if (util.isObject(this._events[type])) {
        this._events[type].push(listener);
      } else {
        this._events[type] = [
          this._events[type],
          listener
        ];
      }
      if (util.isObject(this._events[type]) && !this._events[type].warned) {
        var m;
        if (!util.isUndefined(this._maxListeners)) {
          m = this._maxListeners;
        } else {
          m = EventEmitter.defaultMaxListeners;
        }
        if (m && m > 0 && this._events[type].length > m) {
          this._events[type].warned = true;
          if (util.isFunction(console.error)) {
            console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
          }
          if (util.isFunction(console.trace)) {
            console.trace();
          }
        }
      }
      return this;
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function (type, listener) {
      if (!util.isFunction(listener)) {
        throw TypeError('listener must be a function');
      }
      var fired = false;

      function g() {
        this.removeListener(type, g);
        if (!fired) {
          fired = true;
          listener.apply(this, arguments);
        }
      }

      g.listener = listener;
      this.on(type, g);
      return this;
    };
    EventEmitter.prototype.removeListener = function (type, listener) {
      var list, position, length, i;
      if (!util.isFunction(listener)) {
        throw TypeError('listener must be a function');
      }
      if (!this._events || !this._events[type]) {
        return this;
      }
      list = this._events[type];
      length = list.length;
      position = -1;
      if (list === listener || util.isFunction(list.listener) && list.listener === listener) {
        delete this._events[type];
        if (this._events.removeListener) {
          this.emit('removeListener', type, listener);
        }
      } else if (util.isObject(list)) {
        for (i = length; i-- > 0;) {
          if (list[i] === listener || list[i].listener && list[i].listener === listener) {
            position = i;
            break;
          }
        }
        if (position < 0) {
          return this;
        }
        if (list.length === 1) {
          list.length = 0;
          delete this._events[type];
        } else {
          list.splice(position, 1);
        }
        if (this._events.removeListener) {
          this.emit('removeListener', type, listener);
        }
      }
      return this;
    };
    EventEmitter.prototype.removeAllListeners = function (type) {
      var key, listeners;
      if (!this._events) {
        return this;
      }
      if (!this._events.removeListener) {
        if (arguments.length === 0) {
          this._events = {};
        } else if (this._events[type]) {
          delete this._events[type];
        }
        return this;
      }
      if (arguments.length === 0) {
        for (key in this._events) {
          if (key === 'removeListener') {
            continue;
          }
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = {};
        return this;
      }
      listeners = this._events[type];
      if (util.isFunction(listeners)) {
        this.removeListener(type, listeners);
      } else if (Array.isArray(listeners)) {
        while (listeners.length)
          this.removeListener(type, listeners[listeners.length - 1]);
      }
      delete this._events[type];
      return this;
    };
    EventEmitter.prototype.listeners = function (type) {
      var ret;
      if (!this._events || !this._events[type]) {
        ret = [];
      } else if (util.isFunction(this._events[type])) {
        ret = [this._events[type]];
      } else {
        ret = this._events[type].slice();
      }
      return ret;
    };
    EventEmitter.listenerCount = function (emitter, type) {
      var ret;
      if (!emitter._events || !emitter._events[type]) {
        ret = 0;
      } else if (util.isFunction(emitter._events[type])) {
        ret = 1;
      } else {
        ret = emitter._events[type].length;
      }
      return ret;
    };
    return EventEmitter;
  });

