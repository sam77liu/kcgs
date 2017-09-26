define(["require", 'durandal/system'], function (require, system) {
    var auth = {

       
		setAccessToken: function (accessToken) {
			sessionStorage.setItem("accessToken", accessToken);
		},

		getAccessToken: function () {
			return sessionStorage.getItem("accessToken");
		}
    };
    return auth;

});