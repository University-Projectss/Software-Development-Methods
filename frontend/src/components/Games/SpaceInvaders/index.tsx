import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./Style.module.css";
import { apiClient } from "../../Utils/apiClient";
import { UserContext } from "../../../App";

export const SpaceInvaders = () => {
  /*
    direction 0 -> JOS
    direction 1 -> STANGA
    direction 2 -> SUS
    direction 3 -> DREAPTA
*/

  const user = useContext(UserContext);
  const [angle, setAngle] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  const [tieSpeed, setTieSpeed] = useState<number>(7);

  const [tieKilled, settieKilled] = useState<number>(0);

  const gameRef = useRef<HTMLDivElement | null>(null);
  const falconRef = useRef<HTMLImageElement | null>(null);

  const onLeftClick = () => {
    setAngle(angle + 90);
    setDirection((direction + 1) % 4);
  };

  const onRightClick = () => {
    setAngle(angle - 90);
    setDirection((((direction - 1) % 4) + 4) % 4);
  };

  useEffect(() => {
    let tieGenerator = setInterval(() => {
      let tie = document.createElement("img");
      tie.classList.add(styles.tie);
      tie.id = "tie";
      tie.src = "/resources/tie.png";
      tie.alt = "tie";

      let poz = Math.floor(Math.random() * 4);
      // let poz = 0;

      if (poz == 0) {
        tie.style.animation = `${styles.tie0} ${tieSpeed}s linear`;
      } else if (poz == 1) {
        tie.style.animation = `${styles.tie1} ${tieSpeed}s linear`;
      } else if (poz == 2) {
        tie.style.animation = `${styles.tie2} ${tieSpeed}s linear`;
      } else if (poz == 3) {
        tie.style.animation = `${styles.tie3} ${tieSpeed}s linear`;
      }

      // if(gameRef.current) {
      gameRef.current?.appendChild(tie);
      // }

      setTimeout(() => {
        tie.remove();
      }, 6000);
    }, 3000);

    //Verific daca a ajuns un tie la falcon
    setInterval(() => {
      let enemyShips = gameRef.current?.childNodes ?? [];
      let flc = falconRef.current?.getBoundingClientRect();

      for (let i = 0; i < enemyShips.length; i++) {
        let ship = enemyShips[i] as Element;
        let target = ship.getBoundingClientRect();

        if (
          flc &&
          ship.id === "tie" &&
          flc.left < target.left + target.width &&
          flc.left + flc.width > target.left &&
          flc.top < target.top + target.width &&
          flc.top + flc.height > target.top
        ) {
          // falcon.remove();
          ship.remove();
          clearInterval(tieGenerator);
          console.log("LOSE");

          apiClient
            .put("/api/User/increment-highscore-SpaceInvaders", {
              params: { name: user.user.username, newhs: tieKilled },
            })
            .then((res) => {
              console.log("increment successfully");
            })
            .catch((err) => {
              console.log(err);
            });

          //Ecranul de final pt ca am pierdut :(

          let finish = document.createElement("div");
          finish.classList.add(styles.finish);
          document.body.appendChild(finish);

          let finishTxt = document.createElement("h1");
          finishTxt.innerHTML = "You lost!";
          finish.appendChild(finishTxt);
        }
      }
    }, 1);
  }, []);

  const shoot = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let laser = document.createElement("div");
    laser.classList.add(styles.laser);

    if (direction == 0) {
      laser.style.animation = `${styles.laser0} 1s linear`;
    } else if (direction == 1) {
      laser.style.animation = `${styles.laser1} 1s linear`;
    } else if (direction == 2) {
      laser.style.animation = `${styles.laser2} 1s linear`;
    } else if (direction == 3) {
      laser.style.animation = `${styles.laser3} 1s linear`;
    }

    let interval = setInterval(() => {
      let crd = laser.getBoundingClientRect();
      // console.log(crd);
      let enemy = gameRef.current?.childNodes ?? [];
      //   console.log(enemy);

      for (let i = 0; i < enemy.length; i++) {
        let ship = enemy[i] as Element;
        let target = ship.getBoundingClientRect();

        if (
          ship.id === "tie" &&
          crd.left < target.left + target.width &&
          crd.left + crd.width > target.left &&
          crd.top < target.top + target.width &&
          crd.top + crd.height > target.top
        ) {
          laser.remove();
          ship.remove();
          settieKilled(tieKilled + 1);
          // console.log('WIN');
        }
      }
    }, 1);

    gameRef.current?.appendChild(laser);
    setTimeout(() => {
      laser.remove();
      clearInterval(interval);
    }, 1000);
  };

  return (
    <div className={styles.body}>
      <div className={styles.game} ref={gameRef}>
        <img
          ref={falconRef}
          className={styles.falcon}
          style={{
            transform: `rotate(${angle}deg)`,
          }}
          src="/resources/falcon.png"
        />
      </div>

      <div className={styles.buttons}>
        <h1>STARWARS</h1>
        <div className={styles.shoot} onClick={shoot}>
          SHOOT
        </div>

        <div className={styles.left} onClick={onLeftClick}>
          L
        </div>
        <div className={styles.right} onClick={onRightClick}>
          R
        </div>
      </div>
    </div>
  );
};
