const { primeNumbers } = require('./pruebas2')


xdescribe("checkForOne",()=>{
    //#1 dado un arreglo, saber si el #1 esta dentro del arreglo
// checkForOne([0,2,3,4]) => false
// checkForOne([0,1,3,4]) => true
// checkForOne([0,'asdasdasd',3,4]) => false
// checkForOne([0,1,1,4]) => true

    it("returns true when there is a number one present", () => {
        expect(checkForOne([1,2,3])).toEqual(true)
        expect(checkForOne(["asdasdasd",2,3,1,11111,1])).toEqual(true)

    })

    it("returns false when there is not a number one present", () => {
        expect(checkForOne([5,2,3])).toEqual(false)
        expect(checkForOne(["asdasdasd",2,3])).toEqual(false)
    })

    it("returns false when array is empty", () => {
        expect(checkForOne([])).toEqual(false)
    })

    it("returns false when array is not given", () => {
        expect(checkForOne()).toEqual(false)
    })
})




xdescribe("checkForUniqueOne", () => { 
    //#1 dado un arreglo, saber si el #1 esta dentro del arreglo solo una vez
// checkForUniqueOne([0,2,3,4]) => false
// checkForUniqueOne([0,1,3,4]) => true
// checkForUniqueOne([0,'asdasdasd',3,4]) => false
// checkForUniqueOne([0,1,1,4]) => false

    it("returns true when there is only one number one", () => {
        expect(checkForUniqueOne([1,2,3,34])).toEqual(true)
    })

    it("returns false when there is more than one number one", () => {
        expect(checkForUniqueOne([1,1,,2,3,34])).toEqual(false)
    })

})  
xdescribe("uniqueElement", () => {
//una funcion que retorne todos los caracteres unicos dada una cadena de caracteres
// 'abc' => [a,b,c]
// 'aabc' => [b,c]
// 'aabbbc' => [c]
// text.split() = ['a','b','c']

 it("shows how many times does a letter repeat", () => {
        expect(uniqueElement("aaaacaab")).toEqual(["c","b"])
 })

  it("what happen when string is not given ", () => {
        expect(uniqueElement("")).toEqual([])
  })
  it("what happen when there are some numbres in the string", () => {
        expect(uniqueElement("aaaa123c1111a1ab")).toEqual(["2","3","c","b"])
  })
  it("what happen when there are some numbres in the string", () => {
        expect(uniqueElement("aaABbc")).toEqual(["c"])
  })
    
})
 
describe("primeNumbers", () => { 
    it("should say if the digited number is prime or not ", () => {
        expect(primeNumbers("154")).toEqual(["El numero ingresado no es primo"])
  })
})