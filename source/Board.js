////////////////////////////////////////
// Board.
//
// Return constructor function.

"use strict";

define(["prototypes",
    "PiecePawn",
    "PieceKnight",
    "PieceBishop",
    "PieceRook",
    "PieceKing",
    "PieceQueen"],
    function (prototypes,
    	PiecePawn,
        PieceKnight,
        PieceBishop,
        PieceRook,
        PieceKing,
        PieceQueen) {

        // Define constructor function.
        var functionRet = function Board() {

            var self = this;            // Uber closure.

            ////////////////////////////
            // Public Fields.

            self.Pieces = [[],[]];

            /////////////////////////////
            // Public Functions.

            self.create = function () {

            	try {

            		// Pawns.
            		for (var j = 0; j < 2; j++) {

	            		for (var i = 0; i < 8; i++) {

	            			var pawn = new PiecePawn(self,
	            				i, 
	            				(j === 0 ? 1 : 6),
	            				(j === WHITE));

	            			self.Pieces[j].push(pawn);
	            		}
	            	}

	            	// Rooks.
        			var rookWhite = new PieceRook(self,
        				0, 
        				0,
        				true);
 
        			self.Pieces[WHITE].push(rookWhite);
        			var rookBlack = new PieceRook(self,
        				0, 
        				7,
        				false);
        			self.Pieces[BLACK].push(rookBlack);
        			var rookWhite1 = new PieceRook(self,
        				7, 
        				0,
        				true);
        			self.Pieces[WHITE].push(rookWhite1);
        			var rookBlack1 = new PieceRook(self,
        				7, 
        				7,
        				false);
        			self.Pieces[BLACK].push(rookBlack1);

					// Knights        			
        			var knightWhite = new PieceKnight(self,
        				1, 
        				0,
        				true);
        			self.Pieces[WHITE].push(knightWhite);
        			var knightBlack = new PieceKnight(self,
        				1, 
        				7,
        				false);
        			self.Pieces[BLACK].push(knightBlack);
        			var knightWhite1 = new PieceKnight(self,
        				6, 
        				0,
        				true);
        			self.Pieces[WHITE].push(knightWhite1);
        			var knightBlack1 = new PieceKnight(self,
        				6, 
        				7,
        				false);
        			self.Pieces[BLACK].push(knightBlack1);


        			// Bishops
        			var bishopWhite = new PieceBishop(self,
        				2, 
        				0,
        				true);
        			self.Pieces[WHITE].push(bishopWhite);
        			var bishopBlack = new PieceBishop(self,
        				2, 
        				7,
        				false);
        			self.Pieces[BLACK].push(bishopBlack);
        			var bishopWhite1 = new PieceBishop(self,
        				5, 
        				0,
        				true);
        			self.Pieces[WHITE].push(bishopWhite1);
        			var bishopBlack1 = new PieceBishop(self,
        				5, 
        				7,
        				false);
        			self.Pieces[BLACK].push(bishopBlack1);

        			// Queens.
        			var queenWhite = new PieceQueen(self,
        				3, 
        				0,
        				true);
        			self.Pieces[WHITE].push(queenWhite);
        			var queenBlack = new PieceQueen(self,
        				3, 
        				7,
        				false);
        			self.Pieces[BLACK].push(queenBlack);

        			// Kings.
        			var kingWhite = new PieceKing(self,
        				4, 
        				0,
        				true);
        			self.Pieces[WHITE].push(kingWhite);
        			var kingBlack = new PieceKing(self,
        				4, 
        				7,
        				false);
        			self.Pieces[BLACK].push(kingBlack);

	                return null;
	            } catch (e) {

	            	return e;
	            }
            };

            self.clone = function () {

                var board = new Board();
                for (var j = 0; j < 2; j++) {

                    var arrayPieces = self.Pieces[j];
                    for (var i = 0; i < arrayPieces.length; i++) {

                        var piece = arrayPieces[i];
                        var pieceNew = null;

                        if (piece.type === "Pawn") {

                            pieceNew = new PiecePawn(piece.board,
                                piece.x,
                                piece.y,
                                piece.white,
                                piece.moved);
                        } else if (piece.type === "Bishop") {

                            pieceNew = new PieceBishop(piece.board,
                                piece.x,
                                piece.y,
                                piece.white,
                                piece.moved);
                        } else if (piece.type === "King") {

                            pieceNew = new PieceKing(piece.board,
                                piece.x,
                                piece.y,
                                piece.white,
                                piece.moved);
                        } else if (piece.type === "Knight") {

                            pieceNew = new PieceKnight(piece.board,
                                piece.x,
                                piece.y,
                                piece.white,
                                piece.moved);
                        } else if (piece.type === "Queen") {

                            pieceNew = new PieceQueen(piece.board,
                                piece.x,
                                piece.y,
                                piece.white,
                                piece.moved);
                        } else { // Rook.

                            pieceNew = new PieceRook(piece.board,
                                piece.x,
                                piece.y,
                                piece.white,
                                piece.moved);
                        }
                        board.Pieces[j].push(pieceNew);
                    }
                }
                return board;
            };

            self.getMoves = function (arrayMoves, bWhite) {

                try {

                    // Build the arrayMatrix which gives the taken pieces.
                    var arrayMatrix = new Array(8);

                    for (var i = 0; i < 8; i++)
                    {
                        arrayMatrix[i] = new Array(8);
                    }

                    for (var iColor = 0; iColor < 2; iColor++)
                    {
                        var arrayPieces = self.Pieces[iColor];

                        for (var i = 0; i < arrayPieces.length; i++)
                        {
                            var piece = arrayPieces[i];

                            arrayMatrix[piece.x][piece.y] = piece; 
                        }
                    }

                    var iIndex = (bWhite ? 0 : 1);
                    var arrayPieces = self.Pieces[iIndex];
                    for (var i = 0; i < arrayPieces.length; i++) {

                        var piece = arrayPieces[i];

                        var exceptionRet = piece.getMoves(arrayMoves,
                            arrayMatrix);
                        if (exceptionRet) {

                            throw exceptionRet;
                        }
                    }
/*
                    if (arrayMoves.length === 0) {

                        var strBoard = "";
                        for (var x = 0; x < 8; x++) {

                            for (var y = 0; y < 8; y++) {

                                if (arrayMatrix[y][x]) {

                                    if (arrayMatrix[y][x].white) {

                                        strBoard += "1";
                                    } else {

                                        strBoard += "2";
                                    }
                                } else {

                                    strBoard += "0";
                                }
                            }
                            strBoard += "\r\n";
                        }
                        alert(strBoard);
                    }
*/
                    return null;
                } catch (e) {

                    return e;
                }
            };

            self.makeMove = function (objectMove) {

                try {

                    if (!objectMove) {

                        alert('objectMove');
                        debugger;
                        return null;
                    }

                    // Apply the position update to the piece.
                    objectMove.piece.x = objectMove.x;
                    objectMove.piece.y = objectMove.y;

                    // Possibly remove another piece.
                    if (objectMove.pieceRemove) {

                        var iIndex = (objectMove.pieceRemove.color ? 0 : 1);
                        var arrayPieces = self.Pieces[iIndex];
                        for (var i = 0; i < arrayPieces.length; i++) {

                            if (arrayPieces[i] === objectMove.pieceRemove) {

                                arrayPieces.splice(i, 1);
                                break;
                            }
                        }
                    }

                    // Reset the moved flag on piece.
                    objectMove.piece.moved = true;

                    return null;
                } catch (e) {

                    return e;
                }
            };

            self.evaluate = function (bWhite) {

                var dMasterValue = 0;

                var dPositive = (bWhite === true);
                for (var j = 0; j < 2; j++) {

                    var arrayPieces = self.Pieces[j];
                    for (var i = 0; i < arrayPieces.length; i++) {

                        var piece = arrayPieces[i];

                        var dValue = piece.value;
                        dMasterValue += (dPositive ? dValue : -dValue);
                    }
                    dPositive = !dPositive;
                }

                return dMasterValue;
            };

            /////////////////////////////
            // Private consts.

            var WHITE = 0;
            var BLACK = 1;
        };

        // Return constructor function.
        return functionRet;
    });
