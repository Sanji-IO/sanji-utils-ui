import 'toastr.scss';
import 'angular-material.css';
import './app.scss';
import angular from 'angular';
import ngMaterial from 'angular-material';
import component from './component';

let app = angular.module('webapp', [component, ngMaterial]);
app.run((logger, exception, rest, auth, socket) => {
  exception.catcher('[EXCEPTION TEST]:')({data: {message: 'Internal Error'}});
  logger.info('Hello!', 'We are sanji team');
});
