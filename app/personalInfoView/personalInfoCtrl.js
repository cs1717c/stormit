'use strict';

angular.module('stormit').controller('PersonalInfoCtrl', PersonalInfoCtrl);

function PersonalInfoCtrl ($scope) {

    $scope.showCalAmount = false;

    $scope.sex = 'male';

    $scope.activities = [
        {name: 'Little to no exercise', multiply: 1.2},
        {name: 'Light exercise (1–3 days per week)', multiply: 1.375},
        {name: 'Moderate exercise (3–5 days per week)', multiply: 1.55},
        {name: 'Heavy exercise (6–7 days per week)', multiply: 1.725},
        {name: 'Very heavy exercise (twice per day, extra heavy workouts)', multiply: 1.9}
    ];

    //dropdown container
    $scope.goals = [
        {name: 'Lose weight - 1lb per week', alt: 'tone', cals: 500},
        {name: 'Lose weight - 2lb per week', alt: 'tone', cals: 1000},
        {name: 'Gain weight - 1lb per week', alt: 'bulk', cals: -500},
        {name: 'Gain weight - 2lb per week', alt: 'bulk',cals: -1000},
        {name: 'Maintain weight', alt: 'tone', cals: 0}
    ];

    //function to get total BMR
    $scope.bmr = function() {
        var standard = (parseInt($scope.weight, 10) * 10) +
            (parseInt($scope.height) * 6.25) -
            (parseInt($scope.age) * 5);

        console.log("Calcing BMR");
        console.log("Weight: "+$scope.weight);
        console.log("Height: "+$scope.height);
        console.log("Age: "+$scope.age);
        console.log("Sex: "+$scope.sex);


        if($scope.sex === 'male'){
            return  standard + 5;
        } else if ($scope.sex === 'female'){
            return standard - 161;
        } else {
            return;
        }
    };


    //function to get total daily cals
    $scope.cals = function() {
        if(Number($scope.bmr) !== NaN && $scope.selectedActivity != null && $scope.selectedGoal != null){
            return $scope.bmr() * Number($scope.selectedActivity.multiply) - Number($scope.selectedGoal.cals)
        } else {
            return
        };
    };

    $scope.calcDailyCals = function()
    {
        $scope.showCalAmount = true
        $scope.dailyCals = $scope.cals();
    }

};