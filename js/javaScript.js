// window.addEventListener('DOMContentLoaded', inicio, false);

function sub() {
    var jugador = 'X';
    var nombre1 = document.getElementById("nom1").value;
    var nombre2 = document.getElementById("nom2").value;
    document.getElementById("nombre1").innerHTML = "<h1>" + nombre1 + "</h1>";
    document.getElementById("nombre2").innerHTML = "<h1>" + nombre2 + "</h1>";

    for (var i = 1; i < 9; i++) {
        document.getElementById("boton" + i).addEventListener('click', presion, false);

    }

    function presion(evt) {
        evt.target.value = jugador;
        if (jugador == 'X') {
            jugador = 'O';
        } else {
            jugador = 'X';
        }
        verificarGanador();
    }

    function verificarGanador() {
        var b1 = document.getElementById('boton1').value;
        var b2 = document.getElementById('boton2').value;
        var b3 = document.getElementById('boton3').value;
        var b4 = document.getElementById('boton4').value;
        var b5 = document.getElementById('boton5').value;
        var b6 = document.getElementById('boton6').value;
        var b7 = document.getElementById('boton7').value;
        var b8 = document.getElementById('boton8').value;
        var b9 = document.getElementById('boton9').value;

        if (b1 == 'X' && b2 == 'X' && b3 == 'X')
            document.getElementById("ganador").innerHTML = "Gano " + nombre1;
        if (b4 == 'X' && b5 == 'X' && b6 == 'X')
            document.getElementById("ganador").innerHTML = "Gano " + nombre1;
        if (b7 == 'X' && b8 == 'X' && b9 == 'X')
            document.getElementById("ganador").innerHTML = "Gano " + nombre1;
        if (b1 == 'X' && b4 == 'X' && b7 == 'X')
            document.getElementById("ganador").innerHTML = "Gano " + nombre1;
        if (b2 == 'X' && b5 == 'X' && b8 == 'X')
            document.getElementById("ganador").innerHTML = "Gano " + nombre1;
        if (b3 == 'X' && b6 == 'X' && b9 == 'X')
            document.getElementById("ganador").innerHTML = "Gano " + nombre1;
        if (b1 == 'X' && b5 == 'X' && b9 == 'X')
            document.getElementById("ganador").innerHTML = "Gano " + nombre1;
        if (b3 == 'X' && b5 == 'X' && b7 == 'X')
            document.getElementById("ganador").innerHTML = "Gano " + nombre1;

        if (b1 == 'O' && b2 == 'O' && b3 == 'O')
            document.getElementById("ganador").innerHTML = "Gano " + nombre2;
        if (b4 == 'O' && b5 == 'O' && b6 == 'O')
            document.getElementById("ganador").innerHTML = "Gano " + nombre2;
        if (b7 == 'O' && b8 == 'O' && b9 == 'O')
            document.getElementById("ganador").innerHTML = "Gano " + nombre2;
        if (b1 == 'O' && b4 == 'O' && b7 == 'O')
            document.getElementById("ganador").innerHTML = "Gano " + nombre2;
        if (b2 == 'O' && b5 == 'O' && b8 == 'O')
            document.getElementById("ganador").innerHTML = "Gano " + nombre2;
        if (b3 == 'O' && b6 == 'O' && b9 == 'O')
            document.getElementById("ganador").innerHTML = "Gano " + nombre2;
        if (b1 == 'O' && b5 == 'O' && b9 == 'O')
            document.getElementById("ganador").innerHTML = "Gano " + nombre2;
        if (b3 == 'O' && b5 == 'O' && b7 == 'O')
            document.getElementById("ganador").innerHTML = "Gano " + nombre2;
    }

}