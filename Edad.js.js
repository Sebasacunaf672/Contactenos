function CalculaEdad(Fecha) {
	var Fecha = document.getElementById('edad').value;
    var fechaNacimiento = new Date(Fecha);
    var fechaActual = new Date()

    var mes = fechaActual.getMonth();
    var dia = fechaActual.getDate();
    var año = fechaActual.getFullYear();

    fechaActual.setDate(dia);
    fechaActual.setMonth(mes);
    fechaActual.setFullYear(año);

    edad = Math.floor(((fechaActual - fechaNacimiento) / (1000 * 60 * 60 * 24) / 365));
   
   document.getElementById('Edad').innerHTML = ' Su edad es:  ' + edad + ' años';
   
}




