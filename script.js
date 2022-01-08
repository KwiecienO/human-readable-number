function toReadable (n) {
    var lessThanTen  = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var lessThanTwenty  = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var lessThanHundred = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var result = '';
    if (n < 10) { return lessThanTen[n];
    }
    else if (n < 20 ) {return lessThanTwenty[n-10];
    }
    else if (n < 100 ) {
        if (n % 10 === 0) { result = lessThanHundred[math.Floor(n/10)];
        }
        else { 
            result = lessThanHundred[math.Floor(n/10)] + lessThanTen[n % 10];   
        }  
    }
    else if (n >= 100) {
        result = `${result}${lessThanTen[(math.Floor(n/100))]}` + 'hundred';
        if (n % 100 === 0) {
          var semiResult = toReadable(n % 100);
          result = `${result}${semiResult}`;
         }
    }
}