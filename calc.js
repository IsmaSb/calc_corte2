function Operacion(operar) { 
				

    var firstValue = parseInt(document.getElementById('primerNumero').value);
    var secondValue = parseInt(document.getElementById('segundoNumero').value);				
    var result = 0;
    switch(operar){

        case '+' : 	result = ( (x, y) => {	return x + y; } )( firstValue, secondValue );
                    break;

        case '-' : 	result = ( (x, y) => {	return x - y; } )( firstValue, secondValue );
                    break;
        case '*' : 	result = ( (x, y) => {	return x * y; } )( firstValue, secondValue );
                    break;
        case '/' : 	result = ( (x, y) => {	return x / y; } )( firstValue, secondValue );
                    break;
    }
    
    alert("El resultado de la operacion es: " + result);
}