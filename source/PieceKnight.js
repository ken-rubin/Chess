////////////////////////////////////////
// PieceKnight.
//
// Return constructor function.

"use strict";

define(["prototypes",
    "Piece"],
    function (prototypes, Piece) {

        // Define constructor function.
        var functionRet = function PieceKnight(board, x, y, bWhite, bMoved) {

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

            self.value = 2.5;
            self.type = "Knight";

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
