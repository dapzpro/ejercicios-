const primeNumbers = (num) => {
    let ceroResult=0
    const half = num / 2
    let moduleResult
    for (i = 2; i < half; i++) {
        moduleResult = num % i
        if (moduleResult === 0) {
            ceroResult++ 
        }       
    }
    if (ceroResult != 0) {
        console.log("el numero no es primo")
    } else { console.log("el numero es primo") };          

}

primeNumbers(1048)

