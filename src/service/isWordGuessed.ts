const isWordGuessed = (word: string, letters: string[]) => {
    let ret = true;
    word.split("").map((letter: string, i: number) => {
        if (! letters.includes(letter) && i !== 0 && i !== letters.length-1) {
            ret = false;
        }
    })
    return ret;
};

export default isWordGuessed;