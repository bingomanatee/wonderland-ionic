angular.module('Wonderland.services')
  .factory('Stories',
  [
    'LorenIpsum',
    function (LorenIpsum) {
      var TIME_VARIANCE = (function () {
        var now = new Date();
        var two_years_ago = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
        return now.getTime() - two_years_ago.getTime();
      })();
      var stories = [];

      var id = 0;

      var genres = {
        fantasy: 'Fantasy',
        romance: 'Romance',
        syfy: 'Science Fiction',
        comedy: 'comedy',
        '': 'None'
      };

      var Stories = {
        all: function () {
          return stories;
        },
        get: function (chatId) {
          // Simple index lookup
          return stories[chatId];
        },
        newStoryWithRandomDate: function () {
          var story = this.newStory.apply(this, arguments);
          var time = new Date().getTime();
          story.created = new Date(time - Math.random() * TIME_VARIANCE);
          return story;
        },
        newStory: function (title, description) {
          return {
            title: title || '',
            description: description || LorenIpsum(1, 3),
            user: 3,
            genre: '',
            id: ++id
          }
        },

        genres: function () {
          return genres;
        },
        saveStory: function (storyData, callback) {
          storyData.created = new Date();
          stories.push(storyData);
          if (callback) {
            callback(storyData);
          }
        }
      };

      stories.push(Stories.newStoryWithRandomDate('Alpha Story'));
      stories.push(Stories.newStoryWithRandomDate('Beta Story'));
      stories.push(Stories.newStoryWithRandomDate('Gamma Story'));
      stories.push(Stories.newStoryWithRandomDate('Delta Story'));

      return Stories;
    }

  ]
);
