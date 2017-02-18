angular
    .module('rivercity')
    .directive('rivercityClients',[clientsFunction]);
        
    function clientsFunction(){
        var MY_CONST = 'N/A';
        return{
            restrict: "E",
            templateUrl: "scripts/components/clients/clients.html",
            scope:{

            },
            link: function(scope, element){

            }

        }
    }