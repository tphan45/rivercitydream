angular
  .module('rivercity')
  .directive('rivercityAboutus', [aboutusFunction]);

function aboutusFunction() {
  var MY_CONST = 'N/A';
  return {
    restrict: "E",
    templateUrl: "scripts/components/aboutus/aboutus.html",
    scope: {

    },
    link: function (scope, element) {

    }

  }
}
