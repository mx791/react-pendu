import React from "react";

interface ILetter {
    letter: string,
    visible: boolean
}

const Letter: React.FC<ILetter> = (props) => {

    if (! props.visible) {
        return (<div className="letter">_</div>)
    }
    return (<div className="letter">
        { props.letter }
    </div>)
};

export default Letter;