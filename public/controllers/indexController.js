'use strict'

console.log("[ indexController - Controlador iniciado]");

angular.module("panel",[]).controller('indexController', ['$scope', '$http', '$interval', '$location',		 
	function indexController($scope, $http, $timeout,$location){
		var vm = this;
		vm.cont = 0;
		vm.title = '';
		vm.infoDate = '';
		vm.travels = [];
		vm.notconnect = "";

		function getInfo(){	
				$http({
					method: 'GET',
					url: $location.absUrl() + '/info'
				}).then(function successCallback(response) {
						vm.title = response.data.title;
						vm.infoDate = response.data.infoDate;
						vm.travels = response.data.travels;
						vm.notconnect = "";
					}, function errorCallback(response) {
						vm.notconnect = "Sem conexão";
				})
		}
		getInfo();
		$timeout( getInfo ,10000);
	}
]);