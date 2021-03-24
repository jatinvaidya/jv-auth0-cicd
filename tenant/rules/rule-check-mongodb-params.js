function (user, context, callback) {
  const MONGO_HOST = configuration.MONGO_HOST;
  const MONGO_USER = configuration.MONGO_USER;
  const MONGO_PASS = configuration.MONGO_PASS;
  const MONGO_PORT = configuration.MONGO_PORT;
  console.debug(`MONGO_HOST: ${MONGO_HOST}`);
  console.debug(`MONGO_USER: ${MONGO_USER}`);
  console.debug(`MONGO_PASS: ${MONGO_PASS}`);
  console.debug(`MONGO_PORT: ${MONGO_PORT}`);
  // connect to mongo db etc ...
  // ... not relevant here
  
  return callback(null, user, context);
}