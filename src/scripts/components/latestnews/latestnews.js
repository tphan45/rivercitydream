angular
    .module('rivercity')
    .directive('rivercityLatestnews',[latestnewsFunction]);
        
    function latestnewsFunction(){
        var MY_CONST = 'N/A';
        return{
            restrict: "E",
            templateUrl: "scripts/components/latestnews/latestnews.html",
            scope:{

            },
            link: function(scope, element){

            }

        }
    }