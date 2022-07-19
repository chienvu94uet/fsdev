module.exports = {
  mongooseToObect: function (obj) {
    return obj.toObject({ getters: true });
  },
  multiMongooseToObect: function (lists) {
    return lists.map((list) => list.toObject({ getters: true }));
  },
};
