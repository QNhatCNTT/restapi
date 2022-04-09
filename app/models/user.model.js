const moment = require("moment-timezone");
const dateFormat = moment.tz(Date.now(), "Asia/Ho_Chi_Minh");
console.log(dateFormat);
module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      name: String,
      phone: Number,
      birth_day: Date,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object._id = _id;
    object.__v = __v;
    return object;
  });

  const User = mongoose.model("user", schema);
  return User;
};
