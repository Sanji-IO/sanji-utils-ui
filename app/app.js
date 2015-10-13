import 'toastr.scss';
import 'angular-material.css';
import './app.scss';
import 'angular';
import component from './component';

let app = angular.module('webapp', [component]);
app.run((logger, exception, rest, socket) => {
  exception.catcher('[EXCEPTION TEST]:')({data: {message: 'Internal Error'}});
  logger.info('Hello!', 'We are sanji team');
});
