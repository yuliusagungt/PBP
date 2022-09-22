   
   function reverseString(inputLabel) {
        var currentString = inputLabel;
        var newString = '';
        for (let i = str.length - 1; i >= 0; i--) {
            newString = newString + currentString[i];
        }

        return newString;
    }
