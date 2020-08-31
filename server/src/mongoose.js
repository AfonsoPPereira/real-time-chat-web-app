const mongoose = require('mongoose');

module.exports = function (app) {
  mongoose.connect(app.get('mongodb'), {
    useCreateIndex: true,
    useUnifiedTopology: true, 
    useNewUrlParser: true
  });
  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
