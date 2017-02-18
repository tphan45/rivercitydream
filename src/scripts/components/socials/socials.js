angular
    .module('rivercity')
    .directive('rivercitySocials',[socialsFunction]);
        
    function socialsFunction(){
        var MY_CONST = 'N/A';
        return{
            restrict: "E",
            templateUrl: "scripts/components/socials/socials.html",
            scope:{

            },
            link: function(scope, element){

            }

        }
    }