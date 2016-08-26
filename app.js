var opciones = parseInt(prompt("Escoge una opcion \n" + 
                               "1. Suma \n" +
                               "2. Resta \n" +
                               "3. Multiplicación \n" +
                               "4. División \n" +
                               "5. Resto o Modulo \n" +
                               "6. Menor que \n" +
                               "7. Mayor que \n" +
                               "8. Menor o igual que \n" +
                               "9. Mayor o igual que"))

var numero1 = parseInt(prompt("Ingresa el primer numero"));
var numero2 = parseInt(prompt("Ingresa el segundo numero"));

switch (opciones){  
    case 1:
        var suma = numero1 + numero2;
        alert("La Suma es " + suma);
        break;
        
    case 2:
        var resta = numero1 - numero2;
        alert("La Resta es " + resta);
        break;
    case 3:
        var multiplicacion = numero1 *  numero2;
        alert("La multiplicación es " + multiplicacion);
        break;
    case 4:
        var division = numero1 / numero2;
        alert("La división es " +  division);
        break;
    case 5:
        var resto = numero1 % numero2;
        alert("El resto es " + resto);
        break;
    case 6:
        if(numero1 < numero2){
            alert("El numero menor es " + numero1);
        } else{
            alert("El numero menor es " + numero2);   
        }
        break;
    case 7:
        if(numero1 > numero2){
            alert("El numero mayor es " + numero1);
        } else{
            alert("El numero mayor es " + numero2);   
        }
        break;
    case 8:
        if(numero1 <= numero2){
            alert("El numero menor o igual es " + numero1);
        } else{
            alert("El numero menor o igual es " + numero2);   
        }
        break;
    case 9:
        if(numero1 >= numero2){
            alert("El numero mayor o igual es " + numero1);
        } else{
            alert("El numero mayor o igual es " + numero2);   
        }
        break;    
    default:
    alert("Ahora no joven");
    break;
}
                          
                          