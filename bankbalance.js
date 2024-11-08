
let movimientos = [20000 , 40000 , 55000 , -20000 , -10000] 

function calculateBalances(operaciones) {
    let saldoActual = 40000;
    let deposito = 0 ;
    let retiro = 0 ;
    for (let i = 0 ; i < operaciones.length ; i++) {
        if ( operaciones[i] >= 0 ) {
              deposito += operaciones[i] ;
        }
        else  {
            retiro += operaciones[i];
        }
    }  
    saldoActual= saldoActual + deposito + retiro;
   return [saldoActual,deposito,retiro]
}

function bankbalance(nombre,apellido,array){
        let saldoTotal = array[0];
        let saldoDto=array[1];
        let saldoRto = array[2];

        console.log(
            `Estimado ${nombre} ${apellido}.
            El monto total de los depósitos es de:$${saldoDto}.
            El monto total de los retiros es de:$${saldoRto}.
            Por lo tanto, su saldo actual en la cuenta es de: $${saldoTotal}`)

}
let resultadoTotal = bankbalance("Nahuel","Mendoza",calculateBalances(movimientos)) ;