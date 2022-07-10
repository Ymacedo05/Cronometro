
var tempo = document.getElementById('tempo')
var mais30 = document.getElementById('30Mais')
var menos30 = document.getElementById('30Menos')
var zerar = document.getElementById('zerar')
var iniciar =  document.getElementById('iniciar')

tempo.addEventListener('click',() => {executar('tempo')})
mais30.addEventListener('click',() => {executar('mais30')})
menos30.addEventListener('click',() => {executar('menos30')})
zerar.addEventListener('click',() => {executar('zerar')})
iniciar.addEventListener('click',() => {executar('iniciar')})

let t = 1
console.log(`Script iniciado, t vale: ${t}`)

tempo.value = '0'


function executar(x) {

    
    if(x == 'tempo') {
        console.log(x)

    } else if (x == 'mais30') {
        console.log(x)

        var temp = Number(tempo.value)
        temp += 30
        tempo.value = temp
        

    } else if (x == 'menos30') {
        console.log(x)

        

        if(tempo.value >= 30) {

            var temp = Number(tempo.value)
            temp -= 30
            tempo.value = temp

        } 

    } else if (x == 'zerar') {
        console.log(x)
        tempo.value = 0


    } else if (x == 'iniciar') {

        console.log(x)
        console.log(`Botão de iniciar apertado, t vale: ${t}`)
        t++
        console.log(`Após atribuição do INICIAR, t vale: ${t}`)

        

        if(t == 2) {
            console.log(t)

            let rep = setInterval(() => {
            

                if(tempo.value <= 0) {
    
                    clearInterval(rep)
                    t = 1
                    console.log(`T acabou de ser alterado para: ${t}`)
    
                } else {
    
                    tempo.value--
                    console.log(`t vale: ${t}`)              
    
                } 
    
            }, 1000);
    
            
        }

    }
}