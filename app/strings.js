exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let final = '', last = '', counter;
      str.split('').forEach( character => {
          if (character!== last) counter = 0;
          counter++;
          last = each;
          if (counter <= amount ) final = final + i;
      });
      return final;
  },

  wordWrap: function(str, cols) {
    let formated = '',
      words = [];

    words = str.split(' ');

    formated = words[0];
    words.forEach( word => {
      if (word.length > cols) {
        formated += '\n' + word;
      } else {
        if (formated.length + word.length > cols) {
          formated += '\n' + word;
        } else {
          formated += ' ' + word;
        }
      }
    })
    return formated;
  },

  reverseString: function(str) {
    return str.split('').reverse().join('')
  }
};
