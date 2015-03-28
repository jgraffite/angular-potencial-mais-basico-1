/**
 * Created by Jorge on 27/03/2015.
 */
angular.module('starter', ['starter.controllers', 'ui.router'], function() {

})
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('index', {
                url: "/index", //indica o endereço desta página
                templateUrl: "templates/index.html", //o arquivo template que será usado nesta página
                controller: 'IndexCtrl' //o controlador desta página. Terá as lógicas.
            })
        ;

        $urlRouterProvider.otherwise('/index'); //Endereço para onde um usuário será redirecionado, caso acesse um endereço que não seja algum dos registrados acima

    });
