'use strict';

var s = new Snap('#cow-svg');
Snap.load('images/cow.svg', function (a) {
    s.append(a);
});