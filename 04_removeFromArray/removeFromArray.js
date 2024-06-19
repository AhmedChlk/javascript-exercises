const removeFromArray = function(array,...args) {
    args.forEach(arg => {
        array = array.filter(element => {
            return element !== arg;
    });
        });
        return array;
}
//version condencée 
//const removeFromArray = (array, ...args) => array.filter(element => !args.includes(element));

// Do not edit below this line
module.exports = removeFromArray;
