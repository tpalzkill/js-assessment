exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce(function(sum, current) {
      return sum + current;
    }, 0);
  },

  remove: function(arr, item) {
    let filtered = arr.filter(each => {
      if (each !== item) {
        return each
      }
    });
    return filtered;
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = arr.length - 1; i > 0; i--) {
      if (arr[i] === item) arr.splice(i, 1);
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let count = 0;
    arr.forEach(each => {
      if (each === item) {
        count += 1
      }
    })
    return count;
  },

  duplicates: function(arr) {
    let set = new Set([]);
    let finArr = [];
    arr.forEach(each => {
      if (arr.indexOf(each) !== arr.lastIndexOf(each)) {
        set.add(each);
      }
    })
    set.forEach(each => {
      finArr.push(each);
    })
    return finArr;
  },

  square: function(arr) {
    let finArr = [];
    arr.forEach(each => {
      finArr.push(Math.pow(each, 2));
    })
    return finArr;
  },

  findAllOccurrences: function(arr, target) {
    //broken test or im not understanding
    console.log(target);
    let filtered = arr.filter(each => {
      if ( each === target) { return each }
    })
    return filtered;
  }
};
