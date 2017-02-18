angular
    .module('rivercity')
    .directive('rivercityOurteam',[ourteamFunction]);
        
    function ourteamFunction(){
        var MY_CONST = 'N/A';
        return{
            restrict: "E",
            templateUrl: "scripts/components/ourteam/ourteam.html",
            scope:{

            },
            link: function(scope, element){

            }

        }
    }