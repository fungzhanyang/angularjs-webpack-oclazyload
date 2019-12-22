
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import oclazyload from 'oclazyload';
import homeRouting from './pages/home/home.routing';



export const appModule = angular.module("app", [
	uiRouter,
	oclazyload,
	homeRouting.name
])