function leapYears (arg) {
    const result = (arg%4)==0 && (arg%100)!==0
    const result2 = ((arg%4)==0 && Number.isInteger(arg/400));

    if ((result || result2) === true) {
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
