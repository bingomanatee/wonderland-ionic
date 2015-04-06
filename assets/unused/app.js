angular.module('Wonderland', ['ui.router'])
  .config('$stateProvider', function ($stateProvider) {
    $stateProvider.state('home',
      {
        url: '',
        views: {
          menu: {
            template: 'home.menu'
          },
          body: {
            template: 'home.body'
          }
        }
      })
      .state('list',
      {
        url: '/list',

        views: {
          menu: {
            template: 'list.menu'
          },
          body: {
            template: 'list.body'
          }
        }
      })
  });
