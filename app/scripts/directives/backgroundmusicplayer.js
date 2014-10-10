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
		template: '<button class="btn btn-default" id="myBtn">Play</button> <button class="btn btn-default" id="mute">Mute</button>',
		restrict: 'EA',
		link: function backgroundMusic() {
			var sound = new Howl({
				urls: ['resources/song.mp3'],
				volume: 0.2,
				loop: true,
				autoplay: true
			});
				var mute = document.getElementById('mute');
				mute.onclick = function() {
					if (sound === sound.unmute){
						sound.unmute();
					}
					else {
						sound.mute();
					}
					};
				}
	};
});


