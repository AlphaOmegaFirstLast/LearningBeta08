(function () {
    'use strict';

    angular
        .module('app')
        .controller('AngularController', AngularController);

    AngularController.$inject = ['$location'];

    function AngularController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'AngularController';

        activate();

        function activate() { }
    }
})();
