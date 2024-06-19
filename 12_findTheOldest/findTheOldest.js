const findTheOldest = function(array) {
    let age = array.map(person =>{ person.yearOfDeath - person.yearOfBirth});
    return age.reduce((max, current) => (current > max ? current : max), age[0]);
    

};

// Do not edit below this line
module.exports = findTheOldest;
