function decrescerAte1(){
    let numero = parseInt(document.getElementById('numero').value)
    const ordemcres = []
    const ordemdecres = []
    for(let i=1; i <= numero; i++){
        ordemcres.push(i)
        ordemdecres.unshift(ordemcres.pop(i))
       
    }
    document.getElementById('ordem_decrescente').innerHTML = `Entre ${numero} e 1:  ${ordemdecres}` 
}

let decrescer = document.getElementById('decrescer')
decrescer.addEventListener('click', decrescerAte1)
