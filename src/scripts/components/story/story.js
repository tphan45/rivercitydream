angular
    .module('rivercity')
    .directive('rivercityStory',[storyFunction]);
        
    function storyFunction(){
        var MY_CONST = 'N/A';
        return{
            restrict: "E",
            templateUrl: "scripts/components/story/story.html",
            scope:{

            },
            link: function(scope, element){

            }

        }
    }