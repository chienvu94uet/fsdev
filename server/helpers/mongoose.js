module.exports = {
  mongooseToObect: function (obj) {
    return obj.toObject({ getters: true });
  },
};
