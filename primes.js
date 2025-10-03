function primes(limite) {
    const esPrimo = new Array(limite + 1).fill(true);
    esPrimo[0] = false;
    esPrimo[1] = false;
    for (let p = 2; p * p <= limite; p++) {
        if (esPrimo[p]) {
            for (let i = p * p; i <= limite; i+=p) {
                esPrimo[i] = false;
            }
        }
    }
    const listaPrimos = [];
    let ultimoPrimo;
    for (let i = 2; i <= limite; i++) {
        if (esPrimo[i]) {
            listaPrimos.push([i, i - ultimoPrimo]);
            ultimoPrimo = i;
        }
    }
    return listaPrimos;
}

function twinprimes(limite) {
    let primeslist=primes(limite)
    let midtp=[]
    for (let pp of primeslist) {
        if (pp[1] === 2) {
                pp[2] = "TP";
                midtp.push(pp[0]-1)
            }
            
        }
    return midtp;
}
