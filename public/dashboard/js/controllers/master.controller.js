angular.module('dashboardApp')
  .controller('masterController', function ($scope, editorService) {
        $scope.video = {};
        $scope.loadVideo = function() {
            editorService.yt.video = $scope.video.url;
        }
  });