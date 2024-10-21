avui = new Date();
const anyActual = avui.getFullYear();

final = 2100;
anys= new Array(); // també podriem utilitzar []
let diaSetmana;
for (i = anyActual; i <= final; i++) {
    data = new Date(i, 11, 2);
    diaSetmana = data.getUTCDay();
    if (diaSetmana === 6) {
        anys.unshift(i);
        // anys.push(i);
    }
}

desti.innerHTML=anys;
nombre_diumenges.innerHTML=anys.length;