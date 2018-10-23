'use strict';

var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl : "home/home.html"
        })
        .when("/aboutus", {
            templateUrl : "aboutus/aboutus.html"
        })
        .when("/doctors", {
            templateUrl : "doctors/doctors.html"
        })
        .when("/staff", {
            templateUrl : "staff/staff.html"
        })
        .when("/services", {
            templateUrl : "services/services.html"
        })
        .when("/boarding", {
        templateUrl : "boarding/boarding.html"
    })
        .when("/forms", {
            templateUrl : "forms/forms.html"
        })

        .when("/links", {
            templateUrl : "links/links.html"
        })
        .when("/contacts", {
            templateUrl : "contacts/contacts.html"
        })
        .when("/admin", {
            templateUrl : "admin/admin.html"
        })
        .when("/doctorname", {
            templateUrl : "doctorname/doctorname.html"
        })
        .when("/pacient", {
            templateUrl : "pacient/pacient.html"
        })
        .otherwise({ redirectTo: '/pacient' })
  });

// var demoapp = angular.module('customerApp', ['ngRoute']);
// demoapp.config(function ($routeProvider) {
//     $routeProvider.when('/hello', {
//         controller: 'SimpleController',
//         templateUrl: 'partials/hello.html'
//     });
//     $routeProvider.when('/logout', {
//         controller: 'newController',
//         templateUrl: 'partials/logout.html'
//     });
//     $routeProvider.otherwise({ redirectTo: '/hello' });
// });



