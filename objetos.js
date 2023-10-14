

function createObject(name, subs) {
    let obj = {
        name: name,
        subscribers: subs,
        hash: name.length * subs,
        getStatus: function () {
            return `El canal de ${obj.name} tiene ${obj.subscribers} suscriptores`
        }
    }
    return obj
}
  
obj = createObject('Carmen', 50)
console.log(obj.name)
console.log(obj.subscribers)
console.log(obj.hash)
console.log(obj.getStatus())