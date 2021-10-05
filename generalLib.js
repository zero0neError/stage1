function validaFecha(fecha){//pasamos un array que tiene que estar compuesto con dia,mes,año ['15','12','2001']

    var dia=fecha[0];
    var mes=fecha[1]-=1;
    var anio=fecha[2];
    var date=new Date(anio,mes,dia);
    var isCorrect=date.getMonth() == mes && date.getDate() == dia && date.getFullYear() == anio;
    
    return isCorrect;
}
