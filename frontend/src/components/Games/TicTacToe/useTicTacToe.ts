/**
 * On singleplayer mode, AI play as '0'.
 */

import { useEffect, useState } from "react";
import { BoardInterface, MoveInterface } from "./types";

export const useTicTacToe = (singleplayer: boolean) => {
  const [turn, setTurn] = useState<number>(1);
  const [playMiniMax, setPlayMiniMax] = useState<boolean>(false);

  //   0-isEmpty, 1-X, 2-0
  const [board, setBoard] = useState<BoardInterface>({
    squares: Array(9).fill(0),
  });
  let matrixMiniMax: BoardInterface;

  useEffect(() => {
    const result = checkForWinner(board);

    if (result !== -1) {
      window.alert(result === 0 ? "DRAW" : result === 1 ? "X WON" : "O WON");

      resetTable();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board]);

  useEffect(() => {
    if (singleplayer && playMiniMax) {
      if (checkForWinner(board) !== 1) {
        //check if the board is full after my move
        //if it's not, let the minimax play
        let zeros = 0;
        for (let j = 0; j < 3; j++)
          for (let k = 0; k < 3; k++)
            if (board.squares[3 * j + k] === 0) zeros++;

        if (zeros === 0) {
          resetTable();
        } else {
          bestMove();
        }
      }
      setPlayMiniMax(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playMiniMax]);

  const updateMatrix = (
    f: (m: BoardInterface) => void,
    m: BoardInterface,
    i: number,
    j: number,
    val: number
  ) => {
    f({
      squares: m.squares.map((old, index) => {
        if (index === i * 3 + j) {
          return val;
        } else {
          return old;
        }
      }),
    });
  };

  const showText = (cell: number) => {
    switch (cell) {
      case 1:
        return "X";
      case 2:
        return "O";
      default:
        return "";
    }
  };

  const handleCellClick = (i: number, j: number) => {
    if (board.squares[3 * i + j] === 0) {
      updateMatrix(setBoard, board, i, j, turn);

      if (!singleplayer) {
        setTurn(turn === 1 ? 2 : 1);
      } else {
        setPlayMiniMax(true);
      }
    }
  };

  const bestMove = () => {
    let bestScore = -Infinity;
    let move: MoveInterface = { i: 0, j: 0 };

    matrixMiniMax = board;

    for (let i = 0; i < 9; i++) {
      if (matrixMiniMax.squares[i] === 0) {
        matrixMiniMax.squares[i] = 2;
        let score = minimax(matrixMiniMax, false);
        matrixMiniMax.squares[i] = 0;
        if (score > bestScore) {
          bestScore = score;
          move = { i: Math.floor(i / 3), j: i % 3 };
        }
      }
    }
    updateMatrix(setBoard, board, move.i, move.j, 2);
  };

  const minimax = (matrixMiniMax: BoardInterface, isMaximizing: boolean) => {
    let result = checkForWinner(matrixMiniMax);

    if (result !== -1) {
      return result === 0 ? 0 : result === 1 ? -1 : 1;
    }

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (matrixMiniMax.squares[i] === 0) {
          matrixMiniMax.squares[i] = 2;
          let score = minimax(matrixMiniMax, false);
          matrixMiniMax.squares[i] = 0;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
        if (matrixMiniMax.squares[i] === 0) {
          matrixMiniMax.squares[i] = 1;
          let score = minimax(matrixMiniMax, true);
          matrixMiniMax.squares[i] = 0;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  const resetTable = () => {
    setBoard({ squares: Array(9).fill(0) });
  };

  const checkForWinner = (board: BoardInterface) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        board.squares[a] !== 0 &&
        board.squares[a] === board.squares[b] &&
        board.squares[b] === board.squares[c]
      ) {
        return board.squares[a];
      }
    }

    for (let i = 0; i < 9; i++) if (board.squares[i] === 0) return -1;

    return 0;
  };

  return {
    showText,
    board,
    setBoard,
    handleCellClick,
    turn,
  };
};
