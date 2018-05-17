exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    let concated = function(suffix) {
      return str + ', ' + suffix;
    };
    return concated
  },

  makeClosures: function(arr, fn) {
    return arr.map(function(item) {
      return (function(item) {
        return function() {
          return fn(item);
        }
      })(item);
    });
  },

  partial: function(fn, str1, str2) {
    return function(punctuation) {
      return fn(str1, str2, punctuation);
    };
  },

  useArguments: function() {
    let args = [];

    for (let i in arguments) {
      args.push(arguments[i])
    }

    return args.reduce(function(prev, current) {
      return prev + current;
    });
  },

  callIt: function(fn) {
    return fn.apply(fn, Array.prototype.slice.call(arguments, 1));
  },

  partialUsingArguments: function(fn) {
    let args = [].slice.call(arguments, 1);

    return function() {
      return fn.apply(this, args.concat([].slice.call(arguments)));
    };
  },

  curryIt: function(fn) {
    let args = Array.prototype.slice.call(arguments, 1);

    return function() {
      let _args = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, _args);
    }
  }
};
