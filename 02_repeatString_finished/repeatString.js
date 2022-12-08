const repeatString = function(string1, string2) {
    const element = [];
    if (string2 < 0) {
        return "ERROR";
    } else {
        for (let index = 0; index < string2 ; index++) {
            element.push(string1);
        }
    }
    let e2 = element.join('');
    return e2;
};

// Do not edit below this line
module.exports = repeatString;
