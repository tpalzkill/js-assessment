exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: async function(value) {
    value = await value;
    return value;
  },

  manipulateRemoteData: function(url) {

  }
};
