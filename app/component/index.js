import angular from 'angular';
import {sjLogger} from 'sanji-logger-ui';
import {sjException} from 'sanji-exception-ui';
import {sjSocket} from 'sanji-socket-ui';
import {sjRouter} from 'sanji-router-ui';
import {sjRest} from 'sanji-rest-ui';
import {sjAuth} from 'sanji-auth-ui';

const sjUtils = angular.module('sanji.utils', [
  sjLogger,
  sjException,
  sjSocket,
  sjRouter,
  sjRest,
  sjAuth
])
.name;

export {sjUtils};
