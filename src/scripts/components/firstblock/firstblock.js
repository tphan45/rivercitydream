angular
    .module('rivercity')
    .directive('rivercityFirstblock',[firstblockFunction]);
        
    function firstblockFunction(){
        var MY_CONST = 'N/A';
        return{
            restrict: "E",
            templateUrl: "scripts/components/firstblock/firstblock.html",
            scope:{

            },
            link: function(scope, element){

            }

        }
    }