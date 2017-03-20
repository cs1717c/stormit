'use strict';

angular.module('stormit').controller('FoodDiaryCtrl', FoodDiaryCtrl);

function FoodDiaryCtrl ($scope) {
    fatsecret.variables.navOptions = fatsecret.navFeatures.home | fatsecret.navFeatures.food_diary;

    fatsecret.setContainer("diary_container");
    fatsecret.setCanvas("home");

};