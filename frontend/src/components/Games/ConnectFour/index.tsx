import { Flex } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { apiClient } from "../../Utils/apiClient";
import { UserContext } from "../../../App";

export const ConnetFour = () => {
  const user = useContext(UserContext);
  let mat: any = [];
  for (let i = 0; i < 6; i++) {
    let v: any = [];
    mat.push(v);
  }

  let matVerif: any = [];
  for (let i = 0; i < 6; i++) {
    let vct: any = [];
    matVerif.push(vct);
  }
  //mat de frecventa
  for (let i = 0; i < 6; i++) for (let j = 0; j < 7; j++) matVerif[i][j] = 0; //O sa pun 1 pt galben si 2 pt rosu

  //prima linie
  useEffect(() => {
    mat[0][0] = document.getElementById("Ellipse 1");
    mat[0][1] = document.getElementById("Ellipse 7");
    mat[0][2] = document.getElementById("Ellipse 13");
    mat[0][3] = document.getElementById("Ellipse 14");
    mat[0][4] = document.getElementById("Ellipse 26");
    mat[0][5] = document.getElementById("Ellipse 25");
    mat[0][6] = document.getElementById("Ellipse 27");

    //a doua linie
    mat[1][0] = document.getElementById("Ellipse 2");
    mat[1][1] = document.getElementById("Ellipse 8");
    mat[1][2] = document.getElementById("Ellipse 15");
    mat[1][3] = document.getElementById("Ellipse 16");
    mat[1][4] = document.getElementById("Ellipse 29");
    mat[1][5] = document.getElementById("Ellipse 28");
    mat[1][6] = document.getElementById("Ellipse 30");

    //a treia linie
    mat[2][0] = document.getElementById("Ellipse 3");
    mat[2][1] = document.getElementById("Ellipse 9");
    mat[2][2] = document.getElementById("Ellipse 17");
    mat[2][3] = document.getElementById("Ellipse 18");
    mat[2][4] = document.getElementById("Ellipse 32");
    mat[2][5] = document.getElementById("Ellipse 31");
    mat[2][6] = document.getElementById("Ellipse 33");

    //a patra linie
    mat[3][0] = document.getElementById("Ellipse 4");
    mat[3][1] = document.getElementById("Ellipse 10");
    mat[3][2] = document.getElementById("Ellipse 19");
    mat[3][3] = document.getElementById("Ellipse 20");
    mat[3][4] = document.getElementById("Ellipse 35");
    mat[3][5] = document.getElementById("Ellipse 34");
    mat[3][6] = document.getElementById("Ellipse 36");

    //a cincia linie
    mat[4][0] = document.getElementById("Ellipse 5");
    mat[4][1] = document.getElementById("Ellipse 11");
    mat[4][2] = document.getElementById("Ellipse 21");
    mat[4][3] = document.getElementById("Ellipse 22");
    mat[4][4] = document.getElementById("Ellipse 38");
    mat[4][5] = document.getElementById("Ellipse 37");
    mat[4][6] = document.getElementById("Ellipse 39");

    //a sasea linie
    mat[5][0] = document.getElementById("Ellipse 6");
    mat[5][1] = document.getElementById("Ellipse 12");
    mat[5][2] = document.getElementById("Ellipse 23");
    mat[5][3] = document.getElementById("Ellipse 24");
    mat[5][4] = document.getElementById("Ellipse 41");
    mat[5][5] = document.getElementById("Ellipse 40");
    mat[5][6] = document.getElementById("Ellipse 42");
  }, []);

  let color = 0; //nr par -> galben ... nr impar -> rosu

  const puneBila = (nr: number) => {
    let i;
    nr--;

    for (i = 5; i >= 0; i--) {
      if (mat[i][nr].innerHTML !== "0") {
        //0 inseamna ca am bila pe poz aia
        // console.log(mat[i][nr].innerHTML);
        mat[i][nr].innerHTML = "0";
        break;
      }
    }

    // console.log( i );

    if (i >= 0) {
      if (color % 2 === 0) {
        mat[i][nr].style.fill = "yellow";
        matVerif[i][nr] = 1; //1 -> galben
      } else {
        mat[i][nr].style.fill = "red";
        matVerif[i][nr] = 2; //2 -> rosu
      }

      color++;
    }
  };

  const verifica = () => {
    let i, j;
    let egal = true;

    eEgal: for (i = 0; i < 6; i++)
      for (j = 0; j < 7; j++)
        if (matVerif[i][j] === 0) {
          egal = false;
          break eEgal;
        }

    if (egal) {
      reset("draw");
    } else {
      //pe linii
      peLinii: for (i = 0; i < 6; i++)
        for (j = 0; j < 4; j++)
          if (
            matVerif[i][j] === matVerif[i][j + 1] &&
            matVerif[i][j] === matVerif[i][j + 2] &&
            matVerif[i][j] === matVerif[i][j + 3] &&
            (matVerif[i][j] === 1 || matVerif[i][j] === 2)
          ) {
            reset(mat[i][j].style.fill);
            break peLinii;
          }

      //pe coloane
      peColoane: for (j = 0; j < 7; j++)
        for (i = 0; i < 3; i++)
          if (
            matVerif[i][j] === matVerif[i + 1][j] &&
            matVerif[i][j] === matVerif[i + 2][j] &&
            matVerif[i][j] === matVerif[i + 3][j] &&
            (matVerif[i][j] === 1 || matVerif[i][j] === 2)
          ) {
            reset(mat[i][j].style.fill);
            break peColoane;
          }

      //pe dagonale spre st
      peDiagonaleSt: for (i = 0; i < 3; i++)
        for (j = 0; j < 4; j++)
          if (
            matVerif[i][j] === matVerif[i + 1][j + 1] &&
            matVerif[i][j] === matVerif[i + 2][j + 2] &&
            matVerif[i][j] === matVerif[i + 3][j + 3] &&
            (matVerif[i][j] === 1 || matVerif[i][j] === 2)
          ) {
            reset(mat[i][j].style.fill);
            break peDiagonaleSt;
          }
      //pe diagonale spre dr
      peDiagonaleDr: for (i = 0; i < 3; i++)
        for (j = 6; j >= 3; j--)
          if (
            matVerif[i][j] === matVerif[i + 1][j - 1] &&
            matVerif[i][j] === matVerif[i + 2][j - 2] &&
            matVerif[i][j] === matVerif[i + 3][j - 3] &&
            (matVerif[i][j] === 1 || matVerif[i][j] === 2)
          ) {
            reset(mat[i][j].style.fill);
            break peDiagonaleDr;
          }
    }
  };

  const reset = (winner: string) => {
    let i, j;
    if (winner === "red" || winner === "yellow") {
      alert(`${winner.toUpperCase()} WIN!`);

      if (winner === "red") {
        apiClient
          .put("/api/User/increment-won-Connect4", {
            params: { name: user.user.username },
          })
          .then((res) => {
            console.log("good increment ");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      alert("DRAW!");
    }

    for (i = 0; i < 6; i++)
      for (j = 0; j < 7; j++) {
        matVerif[i][j] = 0;
        mat[i][j].innerHTML = "1";
        mat[i][j].style.fill = "#2468A4";
      }
  };

  const columnClick = (i: number) => {
    puneBila(i);
    verifica();
  };

  return (
    <Flex direction="column" align="center" justify="center" h="100vh">
      {/* board */}
      <div
        style={{
          position: "relative",
          width: "90%",
          maxHeight: "771px",
          maxWidth: "915px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0,
          }}
        >
          <div
            style={colStyle}
            onClick={() => {
              columnClick(1);
            }}
          ></div>
          <div
            style={colStyle}
            onClick={() => {
              columnClick(2);
            }}
          ></div>
          <div
            style={colStyle}
            onClick={() => {
              columnClick(3);
            }}
          ></div>
          <div
            style={colStyle}
            onClick={() => {
              columnClick(4);
            }}
          ></div>
          <div
            style={colStyle}
            onClick={() => {
              columnClick(5);
            }}
          ></div>
          <div
            style={colStyle}
            onClick={() => {
              columnClick(6);
            }}
          ></div>
          <div
            style={colStyle}
            onClick={() => {
              columnClick(7);
            }}
          ></div>
        </div>

        <svg
          width="915"
          height="771"
          viewBox="0 0 915 771"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 2">
            <rect
              id="Rectangle 1"
              width="915"
              height="771"
              rx="38"
              fill="#277CC6"
            />
            <g id="Group 1" filter="url(#filter0_i)">
              <circle id="Ellipse 1" cx="84" cy="75" r="50" fill="#2468A4" />
              <circle id="Ellipse 13" cx="334" cy="75" r="50" fill="#2468A4" />
              <circle id="Ellipse 25" cx="709" cy="75" r="50" fill="#2468A4" />
              <circle id="Ellipse 7" cx="209" cy="75" r="50" fill="#2468A4" />
              <circle id="Ellipse 26" cx="584" cy="75" r="50" fill="#2468A4" />
              <circle id="Ellipse 14" cx="459" cy="75" r="50" fill="#2468A4" />
              <circle id="Ellipse 27" cx="834" cy="75" r="50" fill="#2468A4" />
              <circle id="Ellipse 2" cx="84" cy="199" r="50" fill="#2468A4" />
              <circle id="Ellipse 15" cx="334" cy="199" r="50" fill="#2468A4" />
              <circle id="Ellipse 28" cx="709" cy="199" r="50" fill="#2468A4" />
              <circle id="Ellipse 8" cx="209" cy="199" r="50" fill="#2468A4" />
              <circle id="Ellipse 29" cx="584" cy="199" r="50" fill="#2468A4" />
              <circle id="Ellipse 16" cx="459" cy="199" r="50" fill="#2468A4" />
              <circle id="Ellipse 30" cx="834" cy="199" r="50" fill="#2468A4" />
              <circle id="Ellipse 3" cx="84" cy="323" r="50" fill="#2468A4" />
              <circle id="Ellipse 17" cx="334" cy="323" r="50" fill="#2468A4" />
              <circle id="Ellipse 31" cx="709" cy="323" r="50" fill="#2468A4" />
              <circle id="Ellipse 9" cx="209" cy="323" r="50" fill="#2468A4" />
              <circle id="Ellipse 32" cx="584" cy="323" r="50" fill="#2468A4" />
              <circle id="Ellipse 18" cx="459" cy="323" r="50" fill="#2468A4" />
              <circle id="Ellipse 33" cx="834" cy="323" r="50" fill="#2468A4" />
              <circle id="Ellipse 4" cx="84" cy="447" r="50" fill="#2468A4" />
              <circle id="Ellipse 19" cx="334" cy="447" r="50" fill="#2468A4" />
              <circle id="Ellipse 34" cx="709" cy="447" r="50" fill="#2468A4" />
              <circle id="Ellipse 10" cx="209" cy="447" r="50" fill="#2468A4" />
              <circle id="Ellipse 35" cx="584" cy="447" r="50" fill="#2468A4" />
              <circle id="Ellipse 20" cx="459" cy="447" r="50" fill="#2468A4" />
              <circle id="Ellipse 36" cx="834" cy="447" r="50" fill="#2468A4" />
              <circle id="Ellipse 5" cx="84" cy="571" r="50" fill="#2468A4" />
              <circle id="Ellipse 21" cx="334" cy="571" r="50" fill="#2468A4" />
              <circle id="Ellipse 37" cx="709" cy="571" r="50" fill="#2468A4" />
              <circle id="Ellipse 11" cx="209" cy="571" r="50" fill="#2468A4" />
              <circle id="Ellipse 38" cx="584" cy="571" r="50" fill="#2468A4" />
              <circle id="Ellipse 22" cx="459" cy="571" r="50" fill="#2468A4" />
              <circle id="Ellipse 39" cx="834" cy="571" r="50" fill="#2468A4" />
              <circle id="Ellipse 6" cx="84" cy="695" r="50" fill="#2468A4" />
              <circle id="Ellipse 23" cx="334" cy="695" r="50" fill="#2468A4" />
              <circle id="Ellipse 40" cx="709" cy="695" r="50" fill="#2468A4" />
              <circle id="Ellipse 12" cx="209" cy="695" r="50" fill="#2468A4" />
              <circle id="Ellipse 41" cx="584" cy="695" r="50" fill="#2468A4" />
              <circle id="Ellipse 24" cx="459" cy="695" r="50" fill="#2468A4" />
              <circle id="Ellipse 42" cx="834" cy="695" r="50" fill="#2468A4" />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_i"
              x="34"
              y="25"
              width="854"
              height="724"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="6" dy="6" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.41 0"
              />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            </filter>
          </defs>
        </svg>
      </div>
    </Flex>
  );
};

const colStyle = {
  width: "100%",
  height: "100%",
  color: "aliceblue",
  border: "1px solid black",
};
