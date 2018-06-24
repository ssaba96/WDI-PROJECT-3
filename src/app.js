
import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-messages';




import Router from './config/routes';
// import Auth from './config/satellizer';
import AuthLoginCtrl from './controllers/auth/login';
import AuthRegisterCtrl from './controllers/auth/register';

angular.module('museumsApi', [
  'ui.router',
  'ngMessages'
])
  // .config(Auth)
  .config(Router)
  .controller('AuthLoginCtrl', AuthLoginCtrl)
  .controller('AuthRegisterCtrl', AuthRegisterCtrl);
