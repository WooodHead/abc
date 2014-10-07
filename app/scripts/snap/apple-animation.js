'use strict';

var s = new Snap('#apple-svg');
Snap.load('images/apple.svg', function (a) {
    s.append(a);
});