avui = new Date();
fin = new Date(2025, 6, 23);

let diferencia = fin.getTime() - avui.getTime(); //te dona el temps en ms des de 01/01/1970
let dies = Math.ceil(diferencia / 1000 / 60 / 60 / 24);

/* -ms- /1000
   -seg- /60
   -min- /60
   -hores- /24
   -dies-
*/
let desti=document.getElementById("desti");

desti.innerHTML=dies;