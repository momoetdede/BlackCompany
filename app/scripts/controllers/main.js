'use strict';


/**
 * @ngdoc function
 * @name blackCompanyApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the header
 */

angular.module('blackCompanyApp')
.controller('HeaderCtrl', function ($scope) {
  $scope.header_name = "Header"
});


/**
 * @ngdoc function
 * @name blackCompanyApp.controller:FooterCtrl
 * @description
 * # FooterCtrl
 * Controller of the footer
 */

angular.module('blackCompanyApp')
.controller('FooterCtrl', function ($scope) {
  $scope.footer_name = "Footer"
});
 


/**
 * @ngdoc function
 * @name blackCompanyApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the footer
 */

 angular.module('blackCompanyApp')
 .controller('MenuCtrl', function ($scope) {
   $scope.menu_name = "Menu"
 });
 


/**
 * @ngdoc function
 * @name blackCompanyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blackCompanyApp
 */

//Main Controller
angular.module('blackCompanyApp')
.controller('MainCtrl', function ($scope) {
  $scope.name = "Toubib"
});


/**
 * @ngdoc function
 * @name blackCompanyApp.controller:ContentCtrl
 * @description
 * # ContentCtrl
 * Controller of the Content
 */

angular.module('blackCompanyApp')
.controller('ContentCtrl', function ($scope) {
  $scope.content_name = "Content"
});

