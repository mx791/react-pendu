const getRandomWord = () : string => {

    const liste: string[] = [
        "deltaplane",
        "desoxyribose",
        "ribosone",
        "altercation"
    ];

    let index: number = Math.floor(Math.random() * liste.length);
    return liste[index];
};

export default getRandomWord;