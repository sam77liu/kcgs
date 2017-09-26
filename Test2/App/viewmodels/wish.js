define(['durandal/app', 'auth', 'slider', 'sliderko'], function (app, auth, sl, slko) {
	var ctor = function () {

		this.activate = function (a, e) {

		};
		this.compositionComplete = function (a, e) {
			$('#price-range').slider({ step: 10000, min: 100000, max: 1000000, value: [250000, 500000]});
		};

		this.displayName = 'Welcome to the Durandal Starter Kit!';
		this.myHometown = ko.observable("ddddd");
		this.selectedV = ko.observable([250000, 500000]);
		this.post = function () {
		};
	};

	//Note: This module exports a function. That means that you, the developer, can create multiple instances.
	//This pattern is also recognized by Durandal so that it can create instances on demand.
	//If you wish to create a singleton, you should export an object instead of a function.
	//See the "flickr" module for an example of object export.

	return ctor;
});