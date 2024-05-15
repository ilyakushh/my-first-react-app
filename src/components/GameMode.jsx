import styles from "./GameMode.module.css";

const GameMode = ({ newGame }) => {
  return (
    <div className={styles.game}>
      <p>
        Your goal is to reach the highest number possible by pressing the button
        without stopping. Boosters and saves do not work in this mode, so good
        luck setting a new record! You don't know what number you will have to
        press until, but you can become a real champion!
      </p>
      <button onClick={newGame}>LETS GO</button>
    </div>
  );
};

export default GameMode;
