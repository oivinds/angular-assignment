/**
 * Created by oivind on 05.08.15.
 */
/* global angular */
(function() {

    'use strict';

    var app = angular.module('formlyExample', ['formly', 'formlyBootstrap', 'ui.bootstrap']);

    app.controller('MainCtrl', function MainCtrl(formlyVersion) {
        var vm = this;
        // funcation assignment
        vm.onSubmit = onSubmit;
        vm.resetAllForms = invokeOnAllFormOptions.bind(null, 'resetModel');

        // variable assignment
        vm.author = { // optionally fill in your info below :-)
            name: 'Kent C. Dodds',
            url: 'https://twitter.com/kentcdodds'
        };
        vm.exampleTitle = 'Bootstrap Tabs'; // add this
        vm.env = {
            angularVersion: angular.version.full,
            formlyVersion: formlyVersion
        };

        vm.model = {};

        vm.tabs = [
            {
                title: 'Tab 1',
                active: true,
                form: {
                    options: {},
                    model: vm.model,
                    fields: [
                        {
                            key: 'email',
                            type: 'input',
                            templateOptions: {
                                label: 'Username',
                                type: 'email',
                                placeholder: 'Email address',
                                required: true
                            }
                        }
                    ]
                }
            },
            {
                title: 'Tab 2',
                form: {
                    options: {},
                    model: vm.model,
                    fields: [
                        {
                            key: 'firstName',
                            type: 'input',
                            templateOptions: {
                                label: 'First Name',
                                required: true
                            }
                        },
                        {
                            key: 'lastName',
                            type: 'input',
                            templateOptions: {
                                label: 'Last Name',
                                required: true
                            }
                        }
                    ]
                }
            }
        ];

        vm.originalTabs = angular.copy(vm.form);

        // function definition
        function onSubmit() {
            invokeOnAllFormOptions('updateInitialValue');
            alert(JSON.stringify(vm.model), null, 2);
        }


        function invokeOnAllFormOptions(fn) {
            angular.forEach(vm.tabs, function(tab) {
                if (tab.form.options && tab.form.options[fn]) {
                    tab.form.options[fn]();
                }
            });
        }
    });
})();