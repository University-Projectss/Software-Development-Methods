import { useEffect, useState } from "react";

export const useTicTacToe = () => {
  const [turn, setTurn] = useState<number>(1);

  //   0-isEmpty, 1-X, 2-0
  const [matrix, setMatrix] = useState<number[][]>([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  useEffect(() => {
    const result = checkForWinner();

    if (result !== -1) {
      window.alert(result === 0 ? "DRAW" : result === 1 ? "X WON" : "O WON");

      resetTable();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matrix]);

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
      setMatrix(
        matrix.map((row, ii) => {
          return row.map((cell, jj) => {
            if (i === ii && j === jj) {
              return turn;
            } else {
              return cell;
            }
          });
        })
      );

      setTurn(turn === 1 ? 2 : 1);
    }
  };

  const resetTable = () => {
    setMatrix([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  };

  const checkForWinner = () => {
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

  return {
    showText,
    matrix,
    setMatrix,
    handleCellClick,
    turn,
  };
};
