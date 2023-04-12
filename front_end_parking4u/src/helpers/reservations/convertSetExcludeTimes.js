export const convertSetExcludeTimes = (arrayExcludeTimes) => {

    const result = [];

    // RECORRER EL ARREGLO E IR 
    // DANDO ESTA FORMA: 
    //         new Date().setHours(18, 0),
    //         new Date().setHours(20, 0),
    //         new Date().setHours(21, 0),

    let arrayWithHours = getJustHoursOfArray(arrayExcludeTimes);

    arrayWithHours.forEach(element => {
        let hour = new Date().setHours(element, 0);
        result.push(hour);
    });

    return result;

}

// SI TENGO LAS 18 Y 19 ENTONCES SOLO
// SETEAMOS 18 YA QUE LAS 19 SE PUEDEN RESERVAR
// PERO SI TENEMOS 18 A 20 *QUE HACEMOS?*
//  IDEAS: 
//       SETEAMOS LAS 18 Y 19
//          ALGORITMO:
//              SI LA DIFERENCIA ENRTRE LA HORA DE COMIENZO
//              Y FINAL ES IGUAL A 1, ENTONCES SETEAMOS LA 
//              PRIMER HORA

//              SI LA DIFERENCIA ENRTRE LA HORA DE COMIENZO
//              Y FINAL ES MAYOR A 1, ENTONCES SETEAMOS LA 
//              TODAS MENOS LA ULTIMA HORA       

const getJustHoursOfArray = (array) => {

    let result = [];

    array.forEach(element => {

        let hour = 0;

        if (parseInt(element.hour_end) - parseInt(element.hour_start) == 1) {
            hour = element.hour_start.split(":")[0];
            result.push(parseInt(hour));
        } else {

            let count = parseInt(element.hour_end) - parseInt(element.hour_start);

            for (let i = 0; i < count; i++) {

                hour = parseInt(element.hour_start) + i;
                result.push(parseInt(hour));
            }
        }
    });

    return result;
}

export const execludeTimesForEndTime = (hourData) => {

    let arrayHours = [];

    for (let i = hourData; i > 0; i--) {
        let hour = new Date().setHours(i, 0);
        arrayHours.push(hour);
    }

    return arrayHours;
}