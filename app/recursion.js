exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    let ret = [],
      i;

    if (dirName == data.dir) {
      return this.listFiles(data);
    }
data.files.forEach( datum => {
  if ( typeof datum === "object" ) {
    ret = ret.concat(this.listFiles(datum, dirName))
  } else {
    if (dirName === undefined) { ret.push(datum) };
  }
})

    return ret;
  },

  permute: function(arr) {
    let tmp = [],
      result = [];

    let jumbler = list => {
      for (let i = 0, l = arr.length; i < l; i++) {
        let elem = arr.splice(i, 1)[0];
        tmp.push(elem);
        if (arr.length > 0) {
          jumbler(arr);
        } else {
          result.push(tmp.slice());
        }

        arr.splice(i, 0, elem);
        tmp.pop();
      }

      return result;
    }

    return jumbler(arr);
  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {
    let sets = [];
       let peek = function (left, right, current) {
         if (left == 0 && right == 0) {
           sets.push(current);
         }
         if (left > 0) {
           peek(left - 1, right + 1, current + '(');
         }
         if (right > 0) {
           peek(left, right - 1, current + ')');
         }
         return sets;
       };
       return peek(n, 0, '');
  }
};
