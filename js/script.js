window.addEventListener('DOMContentLoaded', function () {

    'use strict';
        
    let calc = require('./calc.js'),
        forms = require('./forms.js'),
        modal = require('./modal.js'),
        slides = require('./slides.js'),
        tabs = require('./tabs.js'),
        timer = require('./timer.js');

    calc();
    forms();
    modal();
    slides()
    tabs();
    timer();

});