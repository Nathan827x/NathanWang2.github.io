angular.module('portfolio', ['ngRoute'])
    .config(config);

function config($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'html/main/main.html'
        })
        .when('/contact',{
            templateUrl: 'html/contact/contact.html'
        })
        .when('/about', {
            templateUrl: 'html/about/about.html'
        })
        .when('/projects', {
            templateUrl: 'html/projects/projects.html'
        })
        .otherwise({redirectTo: '/'});
}
