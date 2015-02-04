////////////////////////////////////////
// PieceQueen.
//
// Return constructor function.

"use strict";

define(["prototypes",
    "Piece"],
    function (prototypes, Piece) {

        // Define constructor function.
        var functionRet = function PieceQueen(board, x, y, bWhite, bMoved) {

            var self = this;            // Uber closure.

            // Allow constructor parameters to override default settings.
            self.inherits(Piece,
                board,
                x,
                y,
                bWhite,
                bMoved);

            /////////////////////////////
            // Public Const.

            self.value = 9;
            self.type = "Queen";

            /////////////////////////////
            // Public Functions.

            self.getMoves = function (arrayMoves, arrayMatrix) {

                try {


                    return null;
                } catch (e) {

                    return e;
                }
            };
        };

        // One-time injection.
        functionRet.inherits(Piece);

        // Return constructor function.
        return functionRet;
    });
