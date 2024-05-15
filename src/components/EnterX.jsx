import { IoIosClose } from "react-icons/io";
import styles from "./EnterX.module.css";

const EnterX = ({
  changeNumber,
  resetX,
  inputValue,
  onChangeSubmit,
  handleSubmit,
}) => {
  console.log(inputValue);
  return (
    <div className={styles.block}>
      <IoIosClose className={styles.close} onClick={changeNumber} />
      <h2 className={styles.text}>Enter any number up to 1000</h2>
      <input
        className={styles.input}
        type="number"
        placeholder="Type a number"
        value={inputValue}
        onChange={onChangeSubmit}
      />

      <div className={styles.btns}>
        <button onClick={resetX} className={styles.btn}>
          RESET
        </button>
        <button onClick={handleSubmit} className={styles.submit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default EnterX;
