// ==UserScript==
// @name         Feedly Hide Icon a
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Marcin Koperski
// @match        https://feedly.com/*
// @icon         https://www.google.com/s2/favicons?domain=feedly.com
// @grant        none
// ==/UserScript==

var refreshRate = 1000
setInterval(function () {


    function hideIcon() {
        $('[title="Create Team Newsletter"]').hide();
        $('[title="Share with teammates"]').hide();
        $('[aria-label="Power Search"]').hide();
        $('[aria-label="New Features"]').hide();
        $('[aria-label="Learn and Get Support"]').hide();
        $('[title="Train Leo"]').hide();
    };

    hideIcon()



}, refreshRate);
