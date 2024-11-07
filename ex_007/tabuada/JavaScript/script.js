document.getElementById('gerar').addEventListener('click', tabuada)

function tabuada(){
    var n = document.getElementById('num').value
    var resp = document.getElementById('retorno')
    var tab = document.createElement('select')
    tab.setAttribute('size', '10')

    resp.innerText = ''

    if(n.length == 0){
        window.alert('Erro: tente digitar um número')
    }
    else{
        for(var ini = 1; ini <=10; ini++){
            var opt = document.createElement('option')
            opt.text = `${n} x ${ini} = ${ini * n}`
            opt.value = `v${ini}`
            tab.appendChild(opt)
        }
        resp.appendChild(tab)
    }
}