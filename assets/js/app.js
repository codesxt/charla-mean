angular.module('app', [
  'ngRoute',
  'ngAnimate'
]);

angular.module('app')
.controller('NavCtrl', function($scope, $location){
  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };
});

angular.module('app')
.config(function($routeProvider){
  $routeProvider
  .when('/', {
    controller: 'InicioCtrl',
    templateUrl: 'inicio.html'
  })
  .when('/registro', {
    controller: 'RegistroCtrl',
    templateUrl: 'registro.html'
  });
});

angular.module('app')
.controller('InicioCtrl', function(){});

angular.module('app')
.controller('RegistroCtrl', function($scope, $filter, AsistentesSvc){
  AsistentesSvc.obtenerAsistentes().success(function(asistentes){
    $scope.asistentes = asistentes;
  });
  $scope.agregarAsistente = function(){
    AsistentesSvc.agregarAsistente({
      nombre: $scope.asistente.nombre,
      email: $scope.asistente.email
    }).success(function(nuevoAsistente){
      $scope.asistente.nombre = null;
      $scope.asistente.email = null;
      $scope.asistentes.push(nuevoAsistente);
    });
  };
  $scope.eliminarAsistente = function(idAsistente){
    AsistentesSvc.eliminarAsistente(idAsistente)
    .success(function(){
      nid = '!' + idAsistente;
      $scope.asistentes = $filter('filter')($scope.asistentes, {_id: nid});
    });
  };
});

angular.module('app')
.service('AsistentesSvc', function($http){
  this.obtenerAsistentes = function(){
    return $http.get('/api/listar');
  };
  this.agregarAsistente = function(asistente){
    return $http.post('/api/registrar', asistente);
  };
  this.eliminarAsistente = function(idAsistente){
    return $http.delete('/api/eliminar/'+idAsistente);
  };
});
