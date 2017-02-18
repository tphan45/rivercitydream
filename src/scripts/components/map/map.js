angular
    .module('rivercity')
    .directive('rivercityMap',[mapFunction]);
        
    function mapFunction(){
        var MY_CONST = 'N/A';
        return{
            restrict: "E",
            templateUrl: "scripts/components/map/map.html",
            scope:{

            },
            link: function(scope, element){

            }

        }
    }