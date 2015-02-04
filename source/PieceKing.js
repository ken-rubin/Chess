////////////////////////////////////////
// PieceKing.
//
// Return constructor function.

"use strict";

define(["prototypes",
    "Piece"],
    function (prototypes, Piece) {

        // Define constructor function.
        var functionRet = function PieceKing(board, x, y, bWhite, bMoved) {

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

            self.value = 1000;
            self.type = "King";

            /////////////////////////////
            // Public Functions.

            self.getMoves = function (arrayMoves, arrayMatrix) {

                // TODO : Once other piece movement is written, need to look for Check!
                // TODO : Castling

                try {


                    for (var iDx = -1; iDx <= 1; iDx++) {

                        for (var iDy = -1; iDy <= 1; iDy++) {

                            if (iDx === 0 && iDy === 0) {
                                continue;
                            }

                            var iXMove = self.x + iDx;
                            var iYMove = self.y + iDy;

                            if (iXMove > 0 && iXMove < 8 && iYMove > 0 && iYMove < 8) {

                                var pieceMatrix = arrayMatrix[iXMove][iYMove];

                                if (pieceMatrix && self.white !== pieceMatrix.white) {

                                    arrayMoves.push({

                                        piece: self,
                                        x: iXMove,
                                        y: iYMove,
                                        pieceRemove: pieceMatrix
                                    });
                                }
                            }
                        }
                    }
                    // Capture

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
