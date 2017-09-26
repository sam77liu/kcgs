define(["require", 'durandal/system', 'services/api'], function (require, system, api) {
    var service = {

        threadlist:function(paging) {
            return api.api('api/post/threadlist', api.http.POST, paging);
        },

        getthread: function (thread) {
            return api.api('api/post/thread', api.http.POST, thread);
        },

        editthread: function (paging) {
            return api.api('api/post/editthread', api.http.PUT, paging);
        },

        newthread: function (thread) {
            return api.api('api/post/newthread', api.http.POST, thread);
        },


        editpost: function (post) {
            return api.api('api/post/editthread', api.http.PUT, thread);
        },

        newpost: function (post) {
            return api.api('api/post/newpost', api.http.POST, post);
        },

        postlist: function (threadid, paging) {
            paging['filterGuidId'] = threadid;
            return api.api('api/post/thread', api.http.POST, paging);
        },

        newAgreement: function (newAgreement) {
            return api.api('api/post/newAgreement', api.http.POST, newAgreement);
        },
    }

    return service;

});