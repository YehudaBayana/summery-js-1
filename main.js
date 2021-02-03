// mission 1
function minMax(){
    var min = Number.MAX_SAFE_INTEGER;
    var max = Number.MIN_SAFE_INTEGER;
    var numFromUser = 1;
    while (numFromUser > 0) {
        if (numFromUser > max) {
            max = numFromUser;
        }
        if (numFromUser < min) {
            min = numFromUser;
        }
        numFromUser = +prompt("enter a number");

    }
    console.log(`min: ${min}`)
    console.log(`max: ${max}`)
}
minMax();