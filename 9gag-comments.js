// ==UserScript==
// @name         9gag Go To Comments
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make 9gag Better
// @author       You
// @match        https://9gag.com/gag/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=9gag.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const loc = document.location.toString();
    if (!loc.includes('#')) {
        document.location.replace(loc + '#comment');
    }

})();
