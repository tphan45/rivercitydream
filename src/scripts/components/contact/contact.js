angular
    .module('rivercity')
    .directive('rivercityContact',[contactFunction]);
        
    function contactFunction(){
        var MY_CONST = 'N/A';
        return{
            restrict: "E",
            templateUrl: "scripts/components/contact/contact.html",
            scope:{

            },
            link: function(scope, element){

            }

        }
    }