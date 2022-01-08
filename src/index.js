module.exports = function toReadable (number) {
    var lessThanTen  = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var lessThanTwenty  = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var lessThanHundred = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var result = '';
    if (number < 10) { return lessThanTen[number];
    }
    else if (number < 20 ) {return lessThanTwenty[number-10];
    }
    else if (number < 100 ) {
        if (number % 10 === 0) { return lessThanHundred[Math.floor((number / 10)-2)];
            
        }
        else { 
           return  (lessThanHundred[Math.floor((number / 10) -2)] + " " + lessThanTen[number % 10]);   
        }  
    }
    else if (number >= 100) {
        result = lessThanTen[(Math.floor(number/100))] + ' hundred';
        if (number % 100 !== 0) {
          var semiResult = toReadable(number % 100);
          result = result + " " + semiResult;
         }
         return result;
    }

};




