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
		template: '<input type="button" class="btn btn-default mute-button" id="mute" value="Mute" onclick="toggle(this);"></input>',
		restrict: 'EA',
		link: function backgroundMusic(element) {
			    var sound = new Howl({
                urls: ['https://dl.dropboxusercontent.com/u/1538714/article_resources/song.m4a'],
                volume: 0.2,
                loop: true,
                autoplay: false
            });
                function toggle(button)
            {
                if(button.value==='Play')
                {
                    button.value='Mute';
                    sound.unmute();

                    console.log('Play');
                }
                else
                {
                    button.value='Play';
                    sound.mute();
                    console.log('mute');

                }
            }
		}
	};
});

