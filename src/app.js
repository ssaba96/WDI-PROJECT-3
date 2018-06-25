import angular from 'angular';
import '@uirouter/angularjs';
import 'satellizer';
import 'angular-messages';
import 'filepicker-js';
import 'angular-filepicker/dist/angular_filepicker';

import Router from './config/routes';
import Auth from './config/satellizer';
import Upload from './config/filepicker';


import MainCtrl from './controllers/main';
import MuseumsIndexCtrl from './controllers/museums/index';
import MuseumsShowCtrl from './controllers/museums/show';
import AuthLoginCtrl from './controllers/auth/login';
import AuthRegisterCtrl from './controllers/auth/register';

import filePicker from './directives/filePicker';

















angular.module('museumsApi', [
  'ui.router',
  'satellizer',
  'ngMessages',
  'angular-filepicker'
])
  .config(Router)
  .config(Auth)
  .config(Upload)
  .controller('MainCtrl', MainCtrl)
  .controller('AuthLoginCtrl', AuthLoginCtrl)
  .controller('AuthRegisterCtrl', AuthRegisterCtrl)
  .controller('MuseumsIndexCtrl', MuseumsIndexCtrl)
  .controller('MuseumsShowCtrl', MuseumsShowCtrl)
  .directive('filePicker', filePicker);
