///////////////////////////////////////
// Main application module.
// Executes engine.

"use strict";

define(["Engine"],
    function (Engine) {

        try {
debugger;
        	var engine = new Engine();

        	var exceptionRet = engine.play();
        	if (exceptionRet) {

        		throw exceptionRet;
        	}
        } catch (e) {

            alert(e.message);
        }
    });
