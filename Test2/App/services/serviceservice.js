define(["require", 'durandal/system', 'services/api'], function (require, system, api) {
    var service = {

        addidea: function (idea) {
            return api.api('api/me/idea', api.http.POST, idea);
        },

        getList: function (paging) {
            return api.api('api/me/idea', api.http.GET, paging);
        },
    }
    return service;

});