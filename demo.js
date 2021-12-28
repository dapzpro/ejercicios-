const pepe = ()=> { 
 //var //jamas
let a =1 // casi nunca
a = 2 
const b = 2 //siempre
let c 
a = 'asdasd'
a = 1
a = 0.4
c = a
a = 5
console.log({a,c})
a = ['1','2']
c = a
a.push('3')
console.log({a,c})

a = {
    'david': 'alexander',
    'num': 1,
    'hola': () => { console.log('hola mundo')},
    'otro': [1,2],
    'nested': {
        a: 'b'
    }
}
console.log(a.david, a.num, a.hola(),a.otro, a.nested)
a.num =2
console.log(a.num)
const arr = [1,2,3,4,5]
for(let i=0; i< arr.length; i++) {
    console.log(arr[i])
}
arr.forEach((elemento)=>{
    console.log(elemento)
})
return 1
}

module.exports = { pepe }

