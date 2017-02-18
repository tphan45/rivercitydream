angular
    .module('rivercity')
    .directive('rivercityFeatures',[featuresFunction]);
        
    function featuresFunction(){
        var MY_CONST = 'N/A';
        return{
            restrict: "E",
            templateUrl: "scripts/components/features/features.html",
            scope:{

            },
            link: function(scope, element){

            }

        }
    }