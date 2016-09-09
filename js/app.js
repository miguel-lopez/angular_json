var app = angular.module("app", ["ngResource"]);


app.controller('appController', function ($scope, $http) {

    // Function to get the data
    var marcador_local_temp = 0;
    var marcador_visitante_temp = 0;
    $scope.getData = function () {
        $http.get('js/data.json')
                .success(function (data, status, headers, config) {
                    $scope.datos = data;
                    $scope.result = [
                        angular.fromJson(data[0]),
                        angular.fromJson(data[1])
                    ];
                    //console.log("RESULT",$scope.result[0]);

                    $scope.partidos = $scope.result[0].partidos;

                    angular.forEach($scope.partidos, function (value, key) {

                        $scope.idPartido = value.id;
                        if (value.status === "jugando") {
                            var marcador_local = value.marcador_local;
                            var marcador_visitante = value.marcador_visitante;
                            if (marcador_local > marcador_local_temp) {
                              
                                alert("¡GOOOOOOL DE: "+ value.equipo_local);
                                marcador_local_temp = marcador_local;
                            }
                            if (marcador_visitante > marcador_visitante_temp) {
                                alert("¡GOOOOOOL DE: "+ value.equipo_visitante);
                                marcador_visitante_temp = marcador_visitante;
                            }
                        }
                      });

                    console.log('Fetched data!');
                });
    };

    // Run function every second
    setInterval($scope.getData, 1000);

});