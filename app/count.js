exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function(start, end) {
    let intervalId;
    let self = this;

    let startCounter = function() {
      console.log(start);
      intervalId = setInterval(increment, 100);
    };

    let increment = function() {
      start++;
      console.log(start);

      if (start === end) {
        self.cancel();
      }
    };

    this.cancel = function() {
      clearInterval(intervalId);
    };

    startCounter();
  }
};
