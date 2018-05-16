exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var finalString = '', cL = '', counter;
      str.split('').forEach(function(i){
          if (i !== cL) counter = 0;
          counter++;
          cL = i;
          if (counter <= amount ) finalString = finalString + i;
      });
      return finalString;
  },

  wordWrap: function(str, cols) {
    var formatedString = '',
      wordsArray = [];

    wordsArray = str.split(' ');

    formatedString = wordsArray[0];
    wordsArray.forEach(word => {
      if (word.length > cols) {
        formatedString += '\n' + word;
      } else {
        if (formatedString.length + word.length > cols) {
          formatedString += '\n' + word;
        } else {
          formatedString += ' ' + word;
        }
      }
    })
    return formatedString;
  },

  reverseString: function(str) {
    return str.split('').reverse().join('')
  }
};
