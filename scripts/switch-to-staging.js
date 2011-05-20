var enviroment = 'stage';
var currentHost = window.location.host.replace(/^(stage|dev)\./, '');

if(enviroment.length > 0) {
	window.location.host = enviroment+'.'+currentHost;
} else {
	window.location.host = currentHost;
}