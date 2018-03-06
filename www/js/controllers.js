angular.module('app.controllers', [])

.controller('homeCtrl',function($scope,$ionicPlatform, $timeout) {
	var token = null;	
	console.log('homeCtrl');
	
	$scope.registrationId = '';
	$scope.items = [];
	
	var onGetRegistrationID = function(data) {
		try {
			console.log("JPushPlugin:registrationID is " + data);            
            if (data.length == 0) {
				$timeout(getRegistrationID,1000);
            } else {
				$scope.registrationId = data;
			}            
        } catch (exception) {
			console.log(exception);
        }
	}
	
	var getRegistrationID = function() {
		console.log("getRegistrationID");
		window.JPush.getRegistrationID(onGetRegistrationID);
	}
	
	var onOpenNotification = function(event) {
		try {
			var alertContent;
			if (device.platform == "Android") {
			  alertContent = event.alert;
			} else {
			  alertContent = event.aps.alert;
			}
			var item = { event: 'onOpenNotification', eventData: event, text: alertContent };
			$scope.items.push(item);
			$scope.$apply();
		} catch (exception) {
			console.log("JPushPlugin:onOpenNotification" + exception);
		}
	};

	var onReceiveNotification = function(event) {
		try {
			var alertContent;
			if (device.platform == "Android") {
			  alertContent = event.alert;
			} else {
			  alertContent = event.aps.alert;
			}
			var item = { event: 'onReceiveNotification', eventData: event, text: alertContent };
			$scope.items.push(item);
			$scope.$apply();
		} catch (exception) {
			console.log(exception)
		}
	};

	var onReceiveMessage = function(event) {
		try {
			var message;
			if (device.platform == "Android") {
			  message = event.message;
			} else {
			  message = event.content;
			}
			var item = { event: 'onReceiveMessage', eventData: event, text: message };
			$scope.items.push(item);
			$scope.$apply();
		} catch (exception) {
			console.log("JPushPlugin:onReceiveMessage-->" + exception);
		}
	};
	
	var onDeviceReady = function() {
		if (window.cordova && window.cordova.plugins && window.JPush) {
			console.log("onDeviceReady");
			document.addEventListener("jpush.receiveRegistrationId",
				function(event) {
					$scope.registrationId = event.registrationId;
				},false);
			window.JPush.init();
            window.JPush.setDebugMode(true);
			$timeout(getRegistrationID,1000);		
		}
	};
	
	$ionicPlatform.ready(function() {
		
	});
	
	document.addEventListener("deviceready", onDeviceReady, false);
	document.addEventListener("jpush.openNotification", onOpenNotification, false);
	document.addEventListener("jpush.receiveNotification", onReceiveNotification, false);
	document.addEventListener("jpush.receiveMessage", onReceiveMessage, false);	
})
;