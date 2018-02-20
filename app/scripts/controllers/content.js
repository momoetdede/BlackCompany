'use strict';


/**
 * @ngdoc function
 * @name blackCompanyApp.controller:ContentCtrl
 * @description
 * # ContentCtrl
 * Controller of the Content
 */

angular.module('blackCompanyApp')
.controller('ContentCtrl', function ($scope) {
  $scope.title1 = "Preparez-vous a demarrer votre aventure";
  $scope.title2 = "Article 2";
  $scope.content1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit turpis eu nibh elementum, nec euismod ex congue. Maecenas nec aliquam urna. Aliquam mollis molestie fermentum. Duis sapien velit, pulvinar ut scelerisque eget, tempor vel lacus. Duis fringilla porta egestas. Cras imperdiet viverra rhoncus. Sed dictum, urna in ultricies fringilla, nulla eros scelerisque tortor, mollis interdum augue mi quis enim.\n\nDonec ut risus elit. In sit amet malesuada leo, sed ornare diam. Morbi consectetur condimentum egestas. Phasellus iaculis tempus dignissim. Suspendisse vel aliquam dui. Suspendisse pulvinar felis eu diam venenatis ultricies. Cras vel urna efficitur nibh tincidunt tincidunt rhoncus at libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer pellentesque nisl nisl, eu efficitur nulla egestas id. In nec porttitor neque, ac euismod enim. Vivamus fermentum eget ante quis varius. Suspendisse tincidunt dolor tellus, eget rutrum orci hendrerit varius. Suspendisse interdum in nunc in rutrum. Cras maximus dolor non massa vestibulum consectetur. Nunc pellentesque nulla nec tellus lacinia sodales.";
  $scope.content2 = "Content";
  $scope.aside1a = "Aside 1 a";
  $scope.aside1b = "Aside 1 b";
  $scope.aside2a = "Aside 2";

  $scope.CompanyName = "Compagnie Noire";
  $scope.CaptainName = "Toubib";


});
