angular.module('starter.controllers', ['ionic'])

.controller('CompanyListCtrl', function($scope, $http) {
  $scope.resultList = [];
  idx = 0;  // データインデックス初期化
  len = 0;  // 取得データ数
  $scope.loadMore = function() {
    // 一度に６件のデータを取得
    $http.get('http://157.7.141.161:9000/job/list/' + idx + '/6/').then(function(resp) {
      // データ件数を取得
      len = resp.data.result.resultList.length;
      if (len == 0) {
        // 表示可能データが存在しない場合は、読み込み中アイコンを非表示
        $scope.noMoreItemsAvailable = true;
      }
      for(i=0; i<len; i++) {
        // 画面上にデータをセット
        $scope.resultList.push(resp.data.result.resultList[i]);
        idx++;  // データ取得インデックスを更新
      }

      $scope.$broadcast('scroll.infiniteScrollComplete');
    }, function(err) {
      console.error('ERR', err);
    });
  };
  }
)
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  //alert($stateParams.chatId);
  $scope.chat = Chats.get($stateParams.chatId);

});
