angular.module('Wonderland.services', [])

/**
 * A simple example service that returns some data.
 */
  .factory('Friends', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var friends = [
      { id: 0, name: 'Scruff McGruff' },
      { id: 1, name: 'G.I. Joe' },
      { id: 2, name: 'Miss Frizzle' },
      { id: 3, name: 'Ash Ketchum' }
    ];

    return {
      all: function() {
        return friends;
      },
      get: function(friendId) {
        // Simple index lookup
        return friends[friendId];
      }
    }
  })
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [
    { id: 0, user: 1, msg: 'foo is bar' },
    { id: 1, user: 0, msg: 'foo is not bar'},
    { id: 2, user: 1, msg: 'foo is foo' },
    { id: 3, user: 2, msg: 'bar is bar' }
  ];

  return {
    all: function() {
      return chats;
    },
    get: function(chatId) {
      // Simple index lookup
      return chats[chatId];
    }
  }
});
