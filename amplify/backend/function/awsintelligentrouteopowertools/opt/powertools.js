const { Logger } = require("@aws-lambda-powertools/logger");

const awsLambdaPowertoolsVersion = "1.0.2";

const logger = new Logger({
  persistentLogAttributes: {
    logger: {
      name: "@aws-lambda-powertools/logger",
      version: awsLambdaPowertoolsVersion,
    },
  },
  logLevel: "DEBUG",
});

module.exports = {
  logger,
};