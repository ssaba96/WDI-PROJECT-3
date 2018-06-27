import angular from 'angular';
import '@uirouter/angularjs';
import 'satellizer';
import 'angular-messages';
import 'filepicker-js';
import 'angular-filepicker/dist/angular_filepicker';
// import 'angular-ui-carousel';
// import 'angular-ui-carousel/dist/ui-carousel.css';

import 'bulma';
import './scss/style.scss';

import Router from './config/routes';
import Auth from './config/satellizer';
import Upload from './config/filepicker';


import MainCtrl from './controllers/main';
import MuseumsIndexCtrl from './controllers/museums/index';
import MuseumsShowCtrl from './controllers/museums/show';
import AuthLoginCtrl from './controllers/auth/login';
import ProfileShowCtrl from './controllers/auth/profileShow';
import AuthRegisterCtrl from './controllers/auth/register';


import bulmaCard from './directives/bulmaCard';
import filePicker from './directives/filePicker';


angular.module('museumsApi', [
  'ui.router',
  'satellizer',
  'ngMessages',
  'angular-filepicker'
  // 'ui-carousel'

])
  .config(Router)
  .config(Auth)
  .config(Upload)
  .controller('MainCtrl', MainCtrl)
  .controller('AuthLoginCtrl', AuthLoginCtrl)
  .controller('ProfileShowCtrl', ProfileShowCtrl)
  .controller('AuthRegisterCtrl', AuthRegisterCtrl)
  .controller('MuseumsIndexCtrl', MuseumsIndexCtrl)
  .controller('MuseumsShowCtrl', MuseumsShowCtrl)
  .directive('filePicker', filePicker)
  .directive('bulmaCard', bulmaCard);
