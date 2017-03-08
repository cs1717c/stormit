'use strict';

// Declare app level module which depends on views, and components
angular.module('stormit', [
  'ui.router',
]).
config(function($stateProvider) {

  var personalInfoState = {
    name: 'personalInfo',
    url: '/personalInfo',
    templateUrl: 'personalInfoView/personalInfoView.html',
    controller: 'PersonalInfoCtrl'
  }

  var foodDiaryState = {
    name: 'foodDiary',
    url: '/foodDiary',
    templateUrl: 'foodDiaryView/foodDiaryView.html',
    controller: 'FoodDiaryCtrl'
  }

  $stateProvider.state(personalInfoState);
  $stateProvider.state(foodDiaryState);

});
