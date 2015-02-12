angular.module('starter.controllers', [])

.controller('CompanyListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http({
      method: 'get',
      url: 'http://157.7.141.161:9000/job/list/',
      withCredentials: false
    }).
    success(function(data) {
  //alert('Secuss' + data);
      $scope.resultList = data.result.resultList;
    }).
    error(function(data, status) {
      alert('通信エラーが発生しました');
    });

    //$scope.orderProp = 'age';
  }]
)
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  //alert($stateParams.chatId);
  $scope.chat = Chats.get($stateParams.chatId);

});
