import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-messages';

import Router from './config/routes';
import Auth from './config/satellizer';


import MainCtrl from './controllers/main';
import MuseumsIndexCtrl from './controllers/museums/index';
import MuseumsShowCtrl from './controllers/museums/show';
import AuthLoginCtrl from './controllers/auth/login';
import AuthRegisterCtrl from './controllers/auth/register';

















angular.module('museumsApp', [
  'ui.router',
  'ngMessages'
])
  .config(Router)
  .config(Auth)
  .controller('MainCtrl', MainCtrl)
  .controller('AuthLoginCtrl', AuthLoginCtrl)
  .controller('AuthRegisterCtrl', AuthRegisterCtrl)
  .controller('MuseumsIndexCtrl', MuseumsIndexCtrl)
  .controller('MuseumsShowCtrl', MuseumsShowCtrl);
