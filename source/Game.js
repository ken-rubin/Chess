////////////////////////////////////////
// Game.
//
// Return constructor function.

"use strict";

define(["prototypes",
	"PiecePawn"],
    function (prototypes,
    	PiecePawn) {

        // Define constructor function.
        var functionRet = function Game(optionsOverride) {

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

            self.play = function (objectResult, board, bWhite) {

            	try {

            		var objectFirstMove = null;
            		var bInitialWhite = bWhite;
            		var dInitialBoardValue = board.evaluate(bWhite);
            		var dLastBoardValue = dInitialBoardValue;
            		while (1 === 1) {

	            		// Get the moves form the board.
	            		var arrayMoves = [];
	            		var exceptionRet = board.getMoves(arrayMoves,
	            			bWhite);
	            		if (exceptionRet) {

	            			throw exceptionRet;
	            		}

                        if (arrayMoves.length === 0) {

                            break;
                        }

    	        		// Choose one at random.
    	        		var objectMove = arrayMoves[Math.floor(Math.random() * arrayMoves.length)];

    	        		// If this is the first choice, save the move in strMove.
    	        		if (!objectFirstMove) {

    	        			objectFirstMove = objectMove;
    	        		}

            			// Make move.
            			exceptionRet = board.makeMove(objectMove);
            			if (exceptionRet) {

            				throw exceptionRet;
            			}

            			// Evaluate board.
            			var dValue = board.evaluate(bWhite);

            			// Either breakout or switch sides.
            			if (dValue !== dLastBoardValue) {

            				break;
            			} else {

            				bWhite = !bWhite;
            			}
            		}

            		var dFinalBoardValue = board.evaluate(bWhite);

            		var dEvaluation = dFinalBoardValue - dInitialBoardValue;

                    if (objectFirstMove) {

                		var strMove = objectFirstMove.piece.type + 
                            objectFirstMove.piece.id + "~" + 
                            objectFirstMove.x.toString() + "~" + 
                            objectFirstMove.y.toString() + "~" + 
                            (objectFirstMove.pieceRemove ? objectFirstMove.pieceRemove.type : "na");
                		if (objectResult.hasOwnProperty(strMove)) {

    	            		objectResult[strMove] = objectResult[strMove] + dEvaluation;
    	            	} else {

    	            		objectResult[strMove] = dEvaluation;
    	            	}
                    }
                    
	                return null;
	            } catch (e) {

	            	return e;
	            }
            };

            /////////////////////////////
            // Private fields.

            var m_arrayPieces = [[],[]];

            /////////////////////////////
            // Private consts.

            var WHITE = 0;
            var BLACK = 1;
        };

        // Return constructor function.
        return functionRet;
    });
