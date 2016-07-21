$(document).ready(function() {
    setInterval("digiClock()", 1000);
    window.location.closeVentana();

})
function digiClock() {
    var fecha = new Date();
    var vHora = fecha.getHours();
    var vMin = fecha.getMinutes();
    var vSeg = fecha.getSeconds();
    var vDay = fecha.getDay();
    var vDate = fecha.getDate();
    var vMonth = fecha.getMonth();
    

    vMin = ( vMin < 10 ? "0" : "") + vMin;
    vSegu = ( vSeg < 10 ? "0" : "") + vSeg;
    var vAMPM = ( vHora < 12) ? "AM" : "PM";
    vHora = (vHora < 10 ? "0" : "") + vHora;
    vSeg = (vSeg < 10 ? "0" : "") + vSeg;
    
    //Días de la semana
    var semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    pdia = semana[vDay];
    
    //Meses
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octumbre", "Noviembre", "Diciembre"];
    pmeses = meses[vMonth];
    
    var vHoraSistema = vHora + ":"+  vMin + ":" + vSeg + " " + vAMPM;
    var vDaySistema = vDay + " " + "de" + " "+ vMonth;
    
    /*
    var mexico = fecha.getHours();
    mexicos = mexico + 14;
    */

    $("#clock").html(vHoraSistema);
    $(".day").html(pdia +", "+vDate +" de " +pmeses);
    //$(".special").html(mexicos);
}
//Abrir la pequeña ventana para elegir otro país:
 $(document).ready(function(){
    $("button").click(openVentana());
 })
function openVentana() {
    $(".ventana").slideDown("slow");
}
function closeVentana() {
    $(".ventana").slideUp("fast");
}

function tachar(checkbox) {
    var fecha = new Date();
    var vHora = fecha.getHours();
    var vDay = fecha.getDay();
    var vMin = fecha.getMinutes();

    vMin = ( vMin < 10 ? "0" : "") + vMin;
    
    var semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    pdia = semana[vDay];

    var mex = fecha.getHours();
    mexico = parseInt(((mex / 24)+2) + 14);
    if(checkbox.checked){
        $(".special").html("Mexico" + "        " + mexico + ":" + vMin);
    }else {
        alert("Hubo un error");
    }

}

function tacharb(checkbox) {
    var fecha = new Date();
    var vHora = fecha.getHours();
    var vDay = fecha.getDay();
    var vMin = fecha.getMinutes();

    vMin = ( vMin < 10 ? "0" : "") + vMin;
    
    var semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    pdia = semana[vDay];

    var sao = fecha.getHours();
    brasil = parseInt(((sao / 24)+2) + 1);
    if(checkbox.checked){
        $(".specialb").html("Sao Paulo" + "        " + brasil + ":" + vMin);
    }else {
        alert("Hubo un error");
    }

}

function tacharc(checkbox) {
    var fecha = new Date();
    var vHora = fecha.getHours();
    var vDay = fecha.getDay();
    var vMin = fecha.getMinutes();

    vMin = ( vMin < 10 ? "0" : "") + vMin;
    
    var semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    pdia = semana[vDay];

    var mad = fecha.getHours();
    madrid = parseInt(((mad / 24)+2) + 6);
    if(checkbox.checked){
        $(".specialc").html("Madrid" + "        " + madrid + ":" + vMin);
    }else {
        alert("Hubo un error");
    }

}

function tachard(checkbox) {
    var fecha = new Date();
    var vHora = fecha.getHours();
    var vDay = fecha.getDay();
    var vMin = fecha.getMinutes();

    vMin = ( vMin < 10 ? "0" : "") + vMin;
    
    var semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    pdia = semana[vDay];

    var chic = fecha.getHours();
    eeuu = parseInt(((chic / 24)+2) + 21);
    if(checkbox.checked){
        $(".speciald").html("Chicago" + "        " + eeuu + ":" + vMin);
    }else {
        alert("Hubo un error");
    }

}

function tachare(checkbox) {
    var fecha = new Date();
    var vHora = fecha.getHours();
    var vDay = fecha.getDay();
    var vMin = fecha.getMinutes();

    vMin = ( vMin < 10 ? "0" : "") + vMin;
    
    var semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    pdia = semana[vDay];

    var ba = fecha.getHours();
    arg = parseInt(((ba / 24)));
    if(checkbox.checked){
        $(".speciale").html("Buenos Aires" + "        " + arg + ":" + vMin);
    }else {
        alert("Hubo un error");
    }

}

function tacharj(checkbox) {
    var fecha = new Date();
    var vHora = fecha.getHours();
    var vDay = fecha.getDay();
    var vMin = fecha.getMinutes();

    vMin = ( vMin < 10 ? "0" : "") + vMin;
    
    var semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    pdia = semana[vDay];

    var bog = fecha.getHours();
    bogota = parseInt(((bog / 24)+2) + 2);
    if(checkbox.checked){
        $(".specialj").html("Bogota" + "        " + bogota + ":" + vMin);
    }else {
        alert("Hubo un error");
    }

}



