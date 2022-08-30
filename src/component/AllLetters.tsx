import React from "react";

interface IAllLeters {
    letters: string[];
    onClick(letters: string): void;
}

const AllLetters: React.FC<IAllLeters> = (props) => {

    const alfa = "abcdefghijqlmnopqrstuvwxyz";

    return (<div>
        { alfa.split("").map((itm: string) => (
            <div 
                className={"letterButton " + (props.letters.includes(itm) ? "done" : "") }
                onClick={() => props.onClick(itm)}
            >
                { itm }
            </div>
        )) }
    </div>)
};

export default AllLetters;