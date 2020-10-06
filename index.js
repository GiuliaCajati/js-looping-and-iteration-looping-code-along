// Code your solutions in this file

function writeCards(names, event) {
    let thankYouArray = []
    for (let i = 0; i < names.length; i++) {
        thankYouArray.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return thankYouArray
}

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer);
        integer--;
    }

}