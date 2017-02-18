angular
    .module('rivercity')
    .directive('rivercityOurwork',[ourworkFunction]);
        
    function ourworkFunction(){
        var MY_CONST = 'N/A';
        return{
            restrict: "E",
            templateUrl: "scripts/components/ourwork/ourwork.html",
            scope:{

            },
            link: function(scope, element){

            }

        }
    }