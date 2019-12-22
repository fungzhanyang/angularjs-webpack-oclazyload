

module.exports = require('angular').module("app", [
	require('angular-ui-router').default,
	require('oclazyload'),
	require('./pages/home/home.routing').name
])