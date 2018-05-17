exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    let props = [];
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        props.push(prop + ': ' + obj[prop]);
      }
    }
    return props;
  }
};
