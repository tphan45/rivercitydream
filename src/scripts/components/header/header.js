angular
    .module('rivercity')
    .directive('rivercityHeader',[headerFunction]);
        
    function headerFunction(){
        var MY_CONST = 'N/A';
        return{
            restrict: "E",
            templateUrl: "scripts/components/header/header.html",
            scope:{

            },
            link: function(scope, element){

            }

        }
    }