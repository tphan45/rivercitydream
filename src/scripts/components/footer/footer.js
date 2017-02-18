angular
    .module('rivercity')
    .directive('rivercityFooter',[footerFunction]);
        
    function footerFunction(){
        var MY_CONST = 'N/A';
        return{
            restrict: "E",
            templateUrl: "scripts/components/footer/footer.html",
            scope:{

            },
            link: function(scope, element){

            }

        }
    }