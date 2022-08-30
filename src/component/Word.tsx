import React from "react";
import Letter from "./Letter";

interface IWord {
    word: string,
    letters: string[]
}

const Word: React.FC<IWord> = (props) => {

    return (<div className="word">
        { props.word.split("").map((itm: string, i: number) => (
            <Letter 
                letter={itm} 
                visible={i === 0 || i === props.word.length-1 || props.letters.includes(itm)}
            />
        )) }
    </div>)
};

export default Word;