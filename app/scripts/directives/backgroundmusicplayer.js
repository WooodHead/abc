'use strict';

// /**
//  * @ngdoc directive
//  * @name abcApp.directive:backgroundMusicPlayer
//  * @description
//  * # backgroundMusicPlayer
//  */
angular.module('abcApp')
.directive('backgroundMusicPlayer', function () {
	return {
		template: '<button class="btn btn-default" id="myBtn">Play</button> <button class="btn btn-default" id="myBtnPause">Mute</button>',
		restrict: 'EA',
		link: function backgroundMusic() {
			var sound = new Howl({
				urls: ['resources/song.m4a'],
				volume: 0.2,
				loop: true,
				autoplay: true
			});
				function playSound() {
					sound.play();
					}
				function muteSound() {
					sound.mute();
					}
			document.getElementById('myBtn').addEventListener('click', playSound);
			document.getElementById('myBtnPause').addEventListener('click', muteSound);
		}
	};
});