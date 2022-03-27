export const formatString = ( seconds = 0 )=>{
    //Obteniendo las horas y agregardo un '0' si es < 10
    var hour = Math.floor((seconds / 60) % 60);
    hour = (hour < 10)? '0' + hour : hour;

    //Obteniendo los minutos y agregardo un '0' si es < 10
    var minute = seconds % 60;
    minute = (minute < 10)? '0' + minute : minute;
    
    return hour + ':' + minute;
}