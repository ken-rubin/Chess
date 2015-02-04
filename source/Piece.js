////////////////////////////////////////
// Piece.
//
// Return constructor function.

"use strict";

define(["prototypes"],
    function (prototypes) {

        // Define constructor function.
        var functionRet = function Piece(board,
            iX,
            iY,
            bWhite,
            bMoved) {

            var self = this;            // Uber closure.

            ////////////////////////////
            // Public Fields.

            self.board = board;
            self.x = iX || 0;
            self.y = iY || 0;
            self.white = bWhite;
            self.moved = bMoved;

            self.id = iX;

            /////////////////////////////
            // Public Functions.

            self.getMoves = function () {

                return null;
            };
        };

        // Return constructor function.
        return functionRet;
    });
