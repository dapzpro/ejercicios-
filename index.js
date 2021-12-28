const checkForOne = (arr) => {
    let containsOne = false
    if (arr === undefined) return false
    arr.forEach((element) => {
        if(element === 1) {
            containsOne = true
        }
    })
    return containsOne
}


const uniqueElement = (strg) => { 
    const arr = strg.toLowerCase().split("")
    
    const letras = {
            
    }
     arr.forEach((element) => { 
        if (letras[element] === undefined) {
            letras[element] = 1
            
        } else { 
            letras[element]++
        }
        
     })
    const array = []
    Object.entries(letras).forEach(([key, value]) => {
        if (value === 1) {
            array.push(key)
        } 
    })
    return array

    
}



module.exports = { checkForOne, uniqueElement }
