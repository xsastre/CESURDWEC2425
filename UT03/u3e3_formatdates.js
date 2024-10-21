let avui = new Date();

const dies = [
    'Dilluns',
    'Dimarts',
    'Dimecres',
    'Dijous',
    'Divendres',
    'Dissabte',
    'Diumenge'
];

const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

let mesActual;
let sortida;

fi=false;

while(!fi){
    format = parseInt(prompt("Indica el format:\n • 1) 17/02/2016\n • 2) Dimecres, 17 de febrer de 2016.\n • 3) Wednesday, February 17, 2016."));
    if(format >0 && format <=3){
        fi=true;
        switch (format) {
            case 1:
                sortida = avui.getDate()+"/"+(avui.getUTCMonth()+1)+"/"+avui.getUTCFullYear();
                break;
            case 2:
                mesActual = new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date());
                sortida = dies[avui.getDay()-1]+", "+avui.getDate()+" de "+mesActual+" de "+avui.getUTCFullYear();
                break;
            case 3:
                mesActual = new Intl.DateTimeFormat('en-EN', { month: 'long'}).format(new Date());
                sortida = days[avui.getDay()-1]+", "+mesActual+" "+avui.getDate()+", "+avui.getUTCFullYear();
                break;
        }
        desti.innerHTML=sortida;
    }else{
        fi=false;
    }
}



