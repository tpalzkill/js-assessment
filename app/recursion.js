exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {
    let tmp = [],
      result = [];

    let anagram = function(list) {
      for (let i = 0, l = arr.length; i < l; i++) {
        let elem = arr.splice(i, 1)[0];

        tmp.push(elem);

        if (arr.length > 0) {
          anagram(arr);
        } else {
          result.push(tmp.slice());
        }

        arr.splice(i, 0, elem);
        tmp.pop();
      }

      return result;
    }

    return anagram(arr);
  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
