function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
};


function punctMarks(str) {
    str = str.replace(/([,.!?;:()])/g, "$1 ")
    str = str.replace(/ {1,}/g, " ")
    str = str.replace(/ +([,.!?;:()])/g, "$1")
    return str
}

function countWord(str) {
    return str.split(" ").length
}

function uniqueWord(str) {
    let arr = str.replace(/([,.!?;:()])/g, "").toLowerCase().split(" ")

    let countItems = {};
    for (const item of arr) {
        countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
    }
    return countItems

}

export {ucFirst, punctMarks, countWord, uniqueWord}