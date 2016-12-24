(function() {
  'use strict';

  angular.module('app', ["ionic"])

  .run(["$ionicPlatform", function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  }])

  .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('home', {
      abstract: true,
      url: '/home',
      templateUrl: 'app/home/home.html'
      // controller: 'HomeCtrl'
    })

    .state('home.home', {
      url:'/home',
      views: {
        "tab-home": {
          templateUrl: 'app/home/home-tab.html'
        }
      }
    })

    .state('home.favorite', {
      url:'/favorite',
      views: {
        "tab-favorite": {
          templateUrl: 'app/home/favorite-tab.html'
        }
      }
    })

    .state('home.settings', {
      url:'/settings',
      views: {
        "tab-settings": {
          templateUrl: 'app/home/settings-tab.html'
        }
      }
    })

    .state('app', {
      abstract: true,
      url: '/app',
      templateUrl: 'app/layout/menu.layout.html'
    })

    .state('app.register', {
      url: '/register',
      views: {
        'mainContent': {
          templateUrl: 'app/register/register.html'
        }
      }
    })

    .state('app.user', {
      url: '/user/:id',
      views: {
        'mainContent': {
          templateUrl: 'app/users/my-account.html'
        }
      }
    })

    .state('app.trucks', {
      url: '/trucks',
      views: {
        'mainContent': {
          templateUrl: 'app/trucks/trucks.html'
        }
      }
    });

    // .state('', {
    //   url: '',
    //   views: {
    //     'mainContent': {
    //       templateUrl: ''
    //     }
    //   }
    // })

    $urlRouterProvider.otherwise('/app/register');
  }]);
})();



(function() {
  'use strict';

  angular.module('app').controller('myAccountCtrl', ['$stateParams', myAccountCtrl]);

  // myAccountCtrl.$inject = ['dependencies'];

  function myAccountCtrl($stateParams) {
    var vm = this
    console.log("$stateParams", $stateParams);
    //content
  }
})();

(function() {
  'use strict';

  angular.module('app').controller('registerCtrl', registerCtrl);

  registerCtrl.$inject = ['dependencies'];

  function registerCtrl(dependencies) {
    console.lo('Register Controller');
  }
})();
