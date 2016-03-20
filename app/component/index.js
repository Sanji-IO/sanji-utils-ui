import angular from 'angular';
import logger from 'sanji-logger-ui';
import exception from 'sanji-exception-ui';
import socket from 'sanji-socket-ui';
import router from 'sanji-router-ui';
import rest from 'sanji-rest-ui';
import auth from 'sanji-auth-ui';

let app = angular.module('sanji.utils', [
  logger,
  exception,
  socket,
  router,
  rest,
  auth
]);

export default app = app.name
