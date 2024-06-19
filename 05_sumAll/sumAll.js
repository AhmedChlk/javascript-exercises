const sumAll = function(start,end) {
    for (let arg of arguments){
        if(arg <0 || ! Number.isInteger(arg))
            return "ERROR";
    }
    let sum = 0;
    for(let i = Math.min(start,end);i <=Math.max(start,end) ; i++)
        sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
