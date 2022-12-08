const sumAll = function(arg1, arg2) {
    
    const argsNum = typeof(arg1) == "number" && typeof(arg2) == "number"
    var result = 0;

    if (argsNum != true || arg1 < 0 || arg2 < 0) {
        return 'ERROR'
    } else if ((arg2 > arg1) && argsNum) {
        for (let index = 0; index <= arg2; index++) {
            result += index;
        }
    }else if ((arg1 > arg2) && argsNum) {
        for (let index = 0; index <= arg1; index++) {
            result += index;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
