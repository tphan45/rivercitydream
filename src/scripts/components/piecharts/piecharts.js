angular
    .module('rivercity')
    .directive('rivercityPiecharts',[piechartsFunction]);
        
    function piechartsFunction(){
        var MY_CONST = 'N/A';
        return{
            restrict: "E",
            templateUrl: "scripts/components/piecharts/piecharts.html",
            scope:{

            },
            link: function(scope, element){

            }

        }
    }