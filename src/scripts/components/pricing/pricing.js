angular
    .module('rivercity')
    .directive('rivercityPricing',[pricingFunction]);
        
    function pricingFunction(){
        var MY_CONST = 'N/A';
        return{
            restrict: "E",
            templateUrl: "scripts/components/pricing/pricing.html",
            scope:{

            },
            link: function(scope, element){

            }

        }
    }