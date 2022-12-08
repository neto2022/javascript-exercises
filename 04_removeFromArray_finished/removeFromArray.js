const removeFromArray = function (string, ...strings) {

    for (let index2 = 0; index2 <= strings.length; index2++) {

        for (let index = 0; index < string.length; index++) {

            if (string[index] === strings[index2]) {

                function elseStr(params) {

                    return params != strings[index2];
                    
                } 
                string = string.filter(elseStr);
            }
        }
    }
    return string;
};

// Do not edit below this line
module.exports = removeFromArray;
