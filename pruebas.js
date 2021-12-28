const strg=["a","a","b","b","c","v"]
const arreglo = (arr) => { 
    const letras = {
            
    }
    strg.forEach((element) => { 
        console.log(element)
        if (letras[element] === undefined) {
            letras[element] =1
        } else { 
            letras[element]++
        }
        
    })
    const array = []
    Object.entries(letras).forEach(([key, value]) => {
        console.log({ key, value })
        if (value === 1) {
            array.push(key)
        } 
    })
    console.log(array)
}



arreglo(strg)


//la primera vez va a ser indefinido
//que si es 'undefined' entonces que lo tome como si fuera 0
    // que se siga sumando normalmente.
//si no es undefined entonces que se siga sumando de forma normal.
