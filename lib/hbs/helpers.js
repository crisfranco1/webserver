'use strict';

var hbs = require('hbs');
// helpers
hbs.registerHelper('getYear', function () {
    return new Date().getFullYear();
});
hbs.registerHelper('toUpperCase', function (text) {
    var words = text.split(' ');
    words.forEach(function (word, index) {
        words[index] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return words.join(' ');
});