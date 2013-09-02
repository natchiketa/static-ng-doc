'use strict';

angular.module('docsData')
  .controller('MainCtrl', function ($scope, NG_PAGES) {
    $scope.docsItems = NG_PAGES;
  });
