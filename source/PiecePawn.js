////////////////////////////////////////
// PiecePawn.
//
// Return constructor function.

"use strict";

define(["prototypes",
    "Piece"],
    function (prototypes, Piece) {

        // Define constructor function.
        var functionRet = function PiecePawn(board, x, y, bWhite, bMoved) {

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

            self.value = 1;
            self.type = "Pawn";

            /////////////////////////////
            // Public Functions.

            self.getMoves = function (arrayMoves, arrayMatrix) {

                try {

                    var iStep = -1;
                    if (self.white) {

                        iStep = 1;
                    }

                    var iYProposed = self.y + iStep;

                    // Test coordinate
                    var pieceMatrix = arrayMatrix[self.x][iYProposed];
                    if (!pieceMatrix) {

                        arrayMoves.push({

                            piece: self,
                            x: self.x,
                            y: iYProposed
                        });

                        if (!self.moved) {

                            var iYProposed = self.y + 2 * iStep;

                            // Test coordinate
                            var pieceMatrix = arrayMatrix[self.x][iYProposed];
                            if (!pieceMatrix) {

                                arrayMoves.push({

                                    piece: self,
                                    x: self.x,
                                    y: iYProposed
                                });
                            }
                        }
                    }

                    // Capture
                    var iYAttack = self.y + iStep;
                    var iXAttackRight = self.x + 1;                         
                    var iXAttackLeft = self.x - 1;

                    if (iYAttack > 0 &&  iYAttack < 8)
                    {

                        if (iXAttackRight < 8) {

                            var pieceMatrix = arrayMatrix[iXAttackRight][iYAttack];

                            if (pieceMatrix && self.white !== pieceMatrix.white) {

                                arrayMoves.push({

                                    piece: self,
                                    x: iXAttackRight,
                                    y: iYAttack,
                                    pieceRemove: pieceMatrix
                                });
                            }
                        }

                        if (iXAttackLeft > 0) {

                            var pieceMatrix = arrayMatrix[iXAttackLeft][iYAttack];

                            if (pieceMatrix && self.white !== pieceMatrix.white) {

                                arrayMoves.push({

                                    piece: self,
                                    x: iXAttackLeft,
                                    y: iYAttack,
                                    pieceRemove: pieceMatrix
                                });
                            }
                        }
                    }

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
