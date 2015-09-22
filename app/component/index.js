import logger from 'sanji-logger-ui';
import exception from 'sanji-exception-ui';
import socket from 'sanji-socket-ui';
import router from 'sanji-router-ui';

let app = angular.module('sanji.utils', [
  logger,
  exception,
  socket,
  router
]);

export default app = app.name
