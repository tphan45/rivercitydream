angular
    .module('rivercity')
    .directive('rivercityCarousel',[carouselFunction]);
        
    function carouselFunction(){
        var MY_CONST = 'N/A';
        return{
            restrict: "E",
            templateUrl: "scripts/components/carousel/carousel.html",
            scope:{

            },
            link: function(scope, element){

            }

        }
    }