const moment = require("moment");

const logger = (req, res, next) => {
  console.log(
    `${moment().format("DD/MM-YYYY HH:mm")} | ${req.protocol}://${req.get(
      "host"
    )}${req.originalUrl}`
  );
  next();
};
module.exports = logger;
