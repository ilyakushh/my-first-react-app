import { useState, useEffect } from "react";
import { IoSettings } from "react-icons/io5";
import { TfiSave } from "react-icons/tfi";
import "./App.css";
import { CSSTransition } from "react-transition-group";
import Settings from "./components/Settings";
import GameMode from "./components/GameMode";

function App() {
  const [counter, setCounter] = useState(0);
  const [animateCounter, setAnimateCounter] = useState(false);
  const [settingsBlock, setSettingsBlock] = useState(false);
  const [multiplier, setMultiPlier] = useState(1);
  const [enterOwnNumber, setEnterOwnNumber] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [addSave, setAddSave] = useState(false);
  const [saveNum, setSaveNum] = useState(0);
  const [addGame, setAddGame] = useState(false);
  const [gameMode, setGameMode] = useState(false);
  const [showAchievement, setShowAchievement] = useState(false);
  const [achievementCounter, setAchievementCounter] = useState(0);
  const [winningGame, setWinningGame] = useState(false);
  const [playAgain, setPLayagain] = useState(false);

  const incrementalCounter = () => {
    setCounter(counter + 1 * multiplier);
    setAnimateCounter(true);
    if (gameMode && counter % 100 === 0) {
      setAchievementCounter(counter);
    }
    if (!playAgain && counter > 999 && gameMode) {
      setWinningGame(!winningGame);
    }
  };
  const decrementalCounter = () => {
    setCounter(counter - 1 * multiplier);
    setAnimateCounter(true);
  };
  const resetBtn = () => {
    setCounter(saveNum);
  };
  const showSettingsBlock = () => {
    setSettingsBlock(!settingsBlock);
  };
  const stepX2 = () => {
    setSettingsBlock(!settingsBlock);
    setMultiPlier(2);
  };
  const stepX5 = () => {
    setSettingsBlock(!settingsBlock);
    setMultiPlier(5);
  };
  const stepX10 = () => {
    setMultiPlier(10);
    setSettingsBlock(!settingsBlock);
  };
  const changeNumber = () => {
    setEnterOwnNumber(!enterOwnNumber);
  };
  const resetX = () => {
    setMultiPlier(1);
    setEnterOwnNumber(!enterOwnNumber);
    setSettingsBlock(!settingsBlock);
  };
  const onChangeSubmit = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = () => {
    inputValue > 1000 ? setMultiPlier(1000) : setMultiPlier(inputValue);
    setSettingsBlock(!settingsBlock);
    setEnterOwnNumber(!enterOwnNumber);
    setInputValue("");
  };
  const addSavings = () => {
    setAddSave(!addSave);
    setSettingsBlock(!settingsBlock);
  };
  const saveNumber = () => {
    setSaveNum(counter);
  };
  const closeSavings = () => {
    setSaveNum(0);
    setAddSave(!addSave);
    setSettingsBlock(!settingsBlock);
  };
  const startGame = () => {
    setAddGame(!addGame);
    setSettingsBlock(!settingsBlock);
  };
  const newGame = () => {
    setAddGame(!addGame);
    setGameMode(!gameMode);
    setMultiPlier(1);
    setCounter(1);
    setAddSave(false);
  };
  const finishGame = () => {
    setGameMode(!gameMode);
    setPLayagain(false);
  };
  useEffect(() => {
    if (counter % 100 === 0 && gameMode) {
      setShowAchievement(true);

      setTimeout(() => {
        setShowAchievement(false);
      }, 5000);
    }
  }, [counter, gameMode]);
  const quitGame = () => {
    setGameMode(!gameMode);
    setCounter(1);
    setWinningGame(!winningGame);
  };
  const playMoreGame = () => {
    setWinningGame(!winningGame);
    setPLayagain(!playAgain);
  };
  return (
    <div className="App">
      <CSSTransition
        key={counter}
        in={animateCounter}
        timeout={500}
        classNames="fade"
        onEntered={() => setAnimateCounter(false)}
      >
        <h2 className="counter">{counter}</h2>
      </CSSTransition>

      <div className="btns">
        {!gameMode ? (
          <IoSettings className="settings" onClick={showSettingsBlock} />
        ) : (
          ""
        )}

        {addSave ? <TfiSave className="save" onClick={saveNumber} /> : ""}
        {addGame ? <GameMode newGame={newGame} /> : ""}

        {settingsBlock ? (
          <Settings
            showSettingsBlock={showSettingsBlock}
            stepX2={stepX2}
            stepX5={stepX5}
            stepX10={stepX10}
            changeNumber={changeNumber}
            enterOwnNumber={enterOwnNumber}
            resetX={resetX}
            onChangeSubmit={onChangeSubmit}
            inputValue={inputValue}
            handleSubmit={handleSubmit}
            addSavings={addSavings}
            closeSavings={closeSavings}
            startGame={startGame}
          />
        ) : (
          ""
        )}
        <button className="button_plus" onClick={incrementalCounter}>
          Plus
        </button>
        {!gameMode ? (
          <button className="button_minus" onClick={decrementalCounter}>
            Minus
          </button>
        ) : (
          ""
        )}

        {counter !== saveNum && !gameMode ? (
          <button onClick={resetBtn} className="button_reset">
            Reset
          </button>
        ) : (
          ""
        )}
      </div>
      {gameMode ? (
        <button className="finish" onClick={finishGame}>
          FINISH
        </button>
      ) : (
        ""
      )}
      {showAchievement ? (
        <div className="achievement">
          <p className="achievement__title">Achievement</p>
          <p className="achievement__item">
            You have passed {achievementCounter} clicks
          </p>
        </div>
      ) : (
        ""
      )}
      {winningGame ? (
        <div className="win">
          <p className="win__text">
            Congratulations on your victory, you have reached the correct
            number. You can continue to break records or you can quit the game
          </p>
          <div>
            <button className="quit" onClick={quitGame}>
              Quit
            </button>
            <button className="playMore" onClick={playMoreGame}>
              Play more
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
