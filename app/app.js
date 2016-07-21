import 'toastr.scss';
import 'angular-material.css';
import './app.scss';
import angular from 'angular';
import ngMaterial from 'angular-material';
import {sjUtils} from './component';

const app = angular.module('webapp', [sjUtils, ngMaterial]);
app.run((logger, exception) => {
  exception.catcher('[EXCEPTION TEST]:')({data: {message: 'Internal Error'}});
  logger.info('Hello!', 'We are sanji team');
});

angular.element(document).ready(() => {
  angular.bootstrap(document.body, ['webapp']);
});
