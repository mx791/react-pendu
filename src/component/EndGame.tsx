import React from "react";
import Letter from "./Letter";
import isWordGuessed from "../service/isWordGuessed";

interface IEndGame {
    word: string,
    letters: string[],
    attempsLeft: number
}

const EndGame: React.FC<IEndGame> = (props) => {

    const isWin = isWordGuessed(props.word, props.letters);
    if (props.attempsLeft !== 0 && ! isWin) { return (<></>) }

    if (isWin) {
        return (<h1>Vous avez gagné !</h1>)
    }
    return (<>
        <h1>Vous avez perdu !</h1>
        <span>Le mot était { props.word }</span>
        <div className="space" />
    </>)
};

export default EndGame;