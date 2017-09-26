define(["require", 'durandal/system', 'services/auth'], function (require, system, auth) {
	var service = {

		http: {
			GET: 'GET',
			POST: 'POST',
			PUT: 'PUT',
			DELETE: 'DELETE'
		},

		api: function (url, type, data) {
			var self = this;
			var def = $.Deferred(function () {
				return $.ajax({
					type: type,
					url: url,
					headers: {
						'Authorization': 'Bearer ' + auth.getAccessToken()
					},
					contentType: "application/json;charset=utf-8",
					dataType: "json",
					data: (data) ? (ko.toJSON(data)) : null,
				})
					.done(function (result) {
						def.resolve(result);
					})
					.fail(function (error) {
						console.error(error);

						def.reject(error);
					});
			});
			return def.promise();
		},

		redirectLogin: function (d) {
			if (d && d.Message && d.Message == "Authorization has been denied for this request.") {
				var hash = top.location.hash;
				var cLoc = top.location.protocol + '//' + top.location.host + '/account/login' + '?returnUrl=' + encodeURIComponent(hash);
				window.location.replace(cLoc);
				return true;
			}
			return false;
		}

	};
	return service;

});