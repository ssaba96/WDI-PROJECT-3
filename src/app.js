
import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-messages';
import Router from './config/routes';
import AuthLoginCtrl from './controllers/auth/login';
import AuthRegisterCtrl from './controllers/auth/register';

angular.module('museumsApi', [
  'ui.router',
  'ngMessages'
])
  .config(Router)
  .controller('AuthLoginCtrl', AuthLoginCtrl)
  .controller('AuthRegisterCtrl', AuthRegisterCtrl);
