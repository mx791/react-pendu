import React from 'react';
import "./css/App.css";
import Word from "./component/Word";
import getRandomWord from "./service/getRandomWord";
import AllLetters from "./component/AllLetters";
import EndGame from "./component/EndGame";

const App: React.FC = () => {

    const [word, setWord] = React.useState("");
    const [letters, setLetters] = React.useState<string[]>([]);
    const [attemps, setAttemps] = React.useState<number>(10);

    React.useEffect(() => {
        init();
    }, []);

    const sendLetter = (letter: string) => {
        if (letters.includes(letter)) { return; }
        if (attemps == 0) {
            return;
        }
        setAttemps(attemps - 1);
        setLetters([...letters, letter]);
    };

    const init = () => {
        setWord(getRandomWord());
        setLetters([]);
        setAttemps(10);
    };

    return (<div>
        <EndGame
            word={word}
            letters={letters}
            attempsLeft={attemps}
        />
        <Word
            word={word}
            letters={letters}
        />
        <div className="space"></div>
        <AllLetters
            letters={letters}
            onClick={sendLetter}
        />
        <div className="space"></div>
        <span>{ attemps }</span>
        <div className="space"></div>
        <div className="button" onClick={init}>Rejouer</div>
    </div>)
};

export default App;
