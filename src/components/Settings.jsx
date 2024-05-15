import styles from "./Settings.module.css";
import EnterX from "./EnterX";
import { IoIosClose } from "react-icons/io";

const Settings = ({
  showSettingsBlock,
  stepX2,
  stepX5,
  stepX10,
  changeNumber,
  enterOwnNumber,
  resetX,
  inputValue,
  onChangeSubmit,
  handleSubmit,
  addSavings,
  closeSavings,
  startGame,
}) => {
  return (
    <>
      <div
        className={
          enterOwnNumber ? `${styles.settings} ${styles.blur}` : styles.settings
        }
      >
        <div className={styles.top}>
          <div></div>
          <h2 className={styles.title}>Settings</h2>
          <IoIosClose onClick={showSettingsBlock} className={styles.close} />
        </div>
        <div>
          <div className={styles.flex}>
            <p className={`${styles.btn_title} ${styles.steps}`}>steps</p>
            <div className={styles.stepss}>
              <button
                onClick={stepX2}
                className={`${styles.btn_x} ${styles.x2}`}
              >
                x2
              </button>
              <button
                onClick={stepX5}
                className={`${styles.btn_x} ${styles.x5}`}
              >
                x5
              </button>
              <button
                onClick={stepX10}
                className={`${styles.btn_x} ${styles.x10}`}
              >
                x10
              </button>
              <button
                onClick={changeNumber}
                className={`${styles.btn_x} ${styles.xsmg}`}
              >
                ...
              </button>
            </div>
          </div>
          <div className={styles.flex}>
            <p className={styles.btn_title}>game mode</p>
            <div>
              <button
                onClick={startGame}
                className={`${styles.active} ${styles.on}`}
              >
                ON
              </button>
              <button className={`${styles.active} ${styles.off}`}>OFF</button>
            </div>
          </div>
          <div className={styles.flex}>
            <p className={styles.btn_title}>savings</p>
            <div>
              <button
                onClick={addSavings}
                className={`${styles.active} ${styles.on}`}
              >
                ON
              </button>
              <button
                onClick={closeSavings}
                className={`${styles.active} ${styles.off}`}
              >
                OFF
              </button>
            </div>
          </div>
        </div>
      </div>
      {enterOwnNumber && (
        <EnterX
          changeNumber={changeNumber}
          resetX={resetX}
          onChangeSubmit={onChangeSubmit}
          inputValue={inputValue}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default Settings;
