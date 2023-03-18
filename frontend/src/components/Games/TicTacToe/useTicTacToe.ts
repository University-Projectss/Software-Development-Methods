/**
 * On singleplayer mode, AI play as '0'.
 */

import { useEffect, useState } from "react";
import { MoveInterface } from "./types";

export const useTicTacToe = (singleplayer: boolean) => {
  const [turn, setTurn] = useState<number>(1);
  const [playMiniMax, setPlayMiniMax] = useState<boolean>(false);

  //   0-isEmpty, 1-X, 2-0
  const [matrix, setMatrix] = useState<number[][]>([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  let matrixMiniMax: any;

  useEffect(() => {
    const result = checkForWinner(matrix);

    if (result !== -1) {
      window.alert(result === 0 ? "DRAW" : result === 1 ? "X WON" : "O WON");

      resetTable();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matrix]);

  useEffect(() => {
    if (singleplayer && playMiniMax) {
      if (checkForWinner(matrix) !== 1) {
        //check if the board is full after my move
        //if it's not, let the minimax play
        let zeros = 0;
        for (let j = 0; j < 3; j++)
          for (let k = 0; k < 3; k++) if (matrix[j][k] === 0) zeros++;

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
    f: (m: number[][]) => void,
    m: number[][],
    i: number,
    j: number,
    val: number
  ) => {
    f(
      m.map((row, ii) => {
        return row.map((cell, jj) => {
          if (i === ii && j === jj) {
            return val;
          } else {
            return cell;
          }
        });
      })
    );
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
    if (matrix[i][j] === 0) {
      updateMatrix(setMatrix, matrix, i, j, turn);

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

    matrixMiniMax = matrix;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (matrixMiniMax[i][j] === 0) {
          matrixMiniMax[i][j] = 2;
          let score = minimax(matrixMiniMax, false);
          matrixMiniMax[i][j] = 0;
          if (score > bestScore) {
            bestScore = score;
            move = { i, j };
          }
        }
      }
    }
    updateMatrix(setMatrix, matrix, move.i, move.j, 2);
  };

  const minimax = (matrixMiniMax: any, isMaximizing: boolean) => {
    let result = checkForWinner(matrixMiniMax);

    if (result !== -1) {
      return result === 0 ? 0 : result === 1 ? -1 : 1;
    }

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (matrixMiniMax[i][j] === 0) {
            matrixMiniMax[i][j] = 2;
            let score = minimax(matrixMiniMax, false);
            matrixMiniMax[i][j] = 0;
            bestScore = Math.max(score, bestScore);
          }
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (matrixMiniMax[i][j] === 0) {
            matrixMiniMax[i][j] = 1;
            let score = minimax(matrixMiniMax, true);
            matrixMiniMax[i][j] = 0;
            bestScore = Math.min(score, bestScore);
          }
        }
      }
      return bestScore;
    }
  };

  const resetTable = () => {
    setMatrix([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  };

  const checkForWinner = (matrix: number[][]) => {
    //lines
    for (let i = 0; i < 3; i++) {
      if (
        matrix[i][0] === matrix[i][1] &&
        matrix[i][1] === matrix[i][2] &&
        matrix[i][2] !== 0
      ) {
        return matrix[i][1];
      }
    }

    //columns
    for (let i = 0; i < 3; i++) {
      if (
        matrix[0][i] === matrix[1][i] &&
        matrix[1][i] === matrix[2][i] &&
        matrix[2][i] !== 0
      ) {
        return matrix[1][i];
      }
    }

    //first diagonale
    if (
      matrix[0][0] === matrix[1][1] &&
      matrix[1][1] === matrix[2][2] &&
      matrix[2][2] !== 0
    ) {
      return matrix[1][1];
    }

    //second diagonale
    if (
      matrix[0][2] === matrix[1][1] &&
      matrix[1][1] === matrix[2][0] &&
      matrix[2][0] !== 0
    ) {
      return matrix[1][1];
    }

    let zeros = 0;
    for (let j = 0; j < 3; j++)
      for (let k = 0; k < 3; k++) if (matrix[j][k] === 0) zeros++;

    if (zeros === 0) {
      return 0;
    } else {
      return -1;
    }
  };

  /**
   * MINIMAX IMPLEMENTATION
   */

  return {
    showText,
    matrix,
    setMatrix,
    handleCellClick,
    turn,
  };
};
