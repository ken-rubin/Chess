////////////////////////////////////////
// Engine.
//
// Return constructor function.

"use strict";

define(["prototypes",
	"Game",
	"Board"],
    function (prototypes,
    	Game,
    	Board) {

        // Define constructor function.
        var functionRet = function Engine(optionsOverride) {

            var self = this;            // Uber closure.

            ////////////////////////////
            // Public Fields.

            // Options configuration object.
            self.options = {

            };

            // Allow constructor parameters to override default settings.
            self.options.inject(optionsOverride);

            /////////////////////////////
            // Public Functions.

            self.play = function () {

            	try {

            		var board = new Board();
            		var exceptionRet = board.create();
            		if (exceptionRet) {

            			throw exceptionRet;
            		}
            		var bWhite = true;

            		var objectResult = {};

            		for (var i = 0; i < 1000; i++) {

            			var game = new Game();

            			exceptionRet = game.play(objectResult, 
            				board.clone(), 
            				bWhite);
            			if (exceptionRet) {

            				throw exceptionRet;
            			}
            		}

            		var iMaxValue = -Infinity;
            		var strMaxKey = null;
            		for (var strKey in objectResult) {

            			var iCount = objectResult[strKey];
            			if (iCount > iMaxValue) {

            				iMaxValue = iCount;
            				strMaxKey = strKey;
            			}
            		}

            		var strMove = strMaxKey;
            		alert(strMove);

	                return null;
	            } catch (e) {

	            	return e;
	            }
            };
        };

        // Return constructor function.
        return functionRet;
    });
