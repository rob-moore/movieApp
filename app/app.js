const movieApp = angular.module('movieApp', ['ui.router']);

movieApp.config(function($stateProvider, $urlRouterProvider) {
  var displayState = {
    name: 'display',
    url: '/display',
    templateUrl: 'templates/display.html'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: 'templates/about.html'
  }
  $stateProvider.state(displayState);
  $stateProvider.state(aboutState);

  $urlRouterProvider.when('', '/display') // Redirects users to automatically land on the /display page
}),


movieApp.controller('MovieAppController', function MovieAppController($scope, $http) {
  $ctrl = $scope;
  
  $ctrl.sortType = 'vote_count'; // set the default sort type
  $ctrl.sortReverse = true;  // set the default sort order
  $ctrl.selectedMovie = {};
  

  $http.get('/movies').then(response => { // Loads movies from database
    console.log(response);
    $ctrl.movies = response.data;
  })

  $ctrl.selectMovie = movie => {
    $ctrl.selectedMovie = movie;
  }

})