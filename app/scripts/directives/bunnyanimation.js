'use strict';

/**
 * @ngdoc directive
 * @name abcApp.directive:appleAnimation
 * @description
 * # appleAnimation
 */
 angular.module('abcApp')
 .directive('bunnyAnimation', function () {
 	return {
 		restrict: 'EA',
 		link: function postLink(scope, element) {
 			var s = new Snap(element[0]);
 			Snap.load('images/bunny.svg', function (a) {
 				s.append(a);
 				
 				var eye1 = s.select('#eye1');
 				var eye2 = s.select('#eye2');
		// eyes = s.group(eye1, eye2);
		
		function blink1(){
			eye1.animate({ry:1}, 100, 
				function(){
					eye1.animate({ry:21.104}, 100);
				});
		}
		function blink2(){
			eye2.animate({ry:1}, 100, 
				function(){
					eye2.animate({ry:21.104}, 100);
				});
		}
		setInterval(blink1, 5000);
		setInterval(blink2, 5000);
	});
 		}
 	};
 });
