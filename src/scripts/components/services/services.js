angular
    .module('rivercity')
    .directive('rivercityServices',[servicesFunction]);
        
    function servicesFunction(){
        var MY_CONST = 'N/A';
        return{
            restrict: "E",
            templateUrl: "scripts/components/services/services.html",
            scope:{

            },
            link: function(scope, element){

            }

        }
    }