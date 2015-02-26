'use strict';

(function() {
  var app = angular.module('portal.layout.directives', []);
  
  app.directive('portletIcon', function(){
      return {
          restrict : 'E',
          templateUrl : 'partials/portlet-icon.html'
      }
  });
  
  app.directive('defaultCard', function(){
      return {
          restrict : 'E',
          templateUrl : 'partials/default-card.html'
      }
  });
  
  app.directive('staticContentCard', function(){
      return {
          restrict : 'E',
          templateUrl : 'partials/static-content-card.html'
      }
  });
  
  app.directive('staticContentCardMax', function(){
      return {
          restrict : 'E',
          templateUrl : 'partials/static-content-card-max.html'
      }
  });
  
  app.directive('pithyContentCard', function(){
      return {
          restrict : 'E',
          templateUrl : 'partials/pithy-content-card.html'
      }
  });
  
  app.directive('widgetCard', function(){
      return {
          restrict : 'E',
          templateUrl : 'partials/widget-card.html'
      }
  });


   app.directive('marketplaceLight', function(){
      return{
          restrict: 'E',
          templateUrl: 'partials/marketplace-light.html'
      }
   });
   
   app.directive('homeHeader', function(){
      return{
          restrict: 'E',
          templateUrl: 'partials/home-header.html'
      }
   });
   
   app.directive('optionLink', function(){
       function link (scope, element, attrs) {
           if(scope.config) {
               if(scope.config.singleElement) {
                   //set the default selected url
                   scope.portlet.selectedUrl = scope.portlet.widgetData[scope.config.value];
               } else if(scope.portlet.widgetData[scope.config.arrayName].length > 0) {
                   scope.portlet.widgetData[scope.config.arrayName][0][scope.config.value];
               }
           } else {
               console.warn('config not set for option link directive');
           }
           
           scope.$watch(attrs.app, function(value) {
              scope.portlet = value;
           });
       }
       
       return{
           restrict: 'E',
           scope : {
               portlet : '=app',
               config  : '=config'
           },
           templateUrl: 'partials/widgets/option-link.html',
           link : link
       }
    });

})();
