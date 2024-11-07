document.getElementById('enviar').addEventListener('click', contar)

function contar(){
    var ini = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var pas = document.getElementById('passo').value
    var resp = document.getElementById('retorno')

    resp.innerHTML = ''


    if (ini.length == 0 || fim.length == 0 || pas.length == 0){
        window.alert('[Erro], verifique e preencha novamente');
    }
    else{
        ini = Number(ini)
        fim = Number(fim)
        pas = Number(pas)

        if (pas == 0){
            window.alert('Vou considerar o passo como 1.')
            pas = 1
        }
        if(pas < 0){
            pas *= -1
        }
        
        if(ini > fim){
            for(ini;ini >= fim; ini-=pas){
                resp.innerHTML += `${ini} 👉 `
            }
        }
        else{
            for(ini;ini <= fim; ini+=pas){
                resp.innerHTML += `${ini} 👉 `
            }
        }
        resp.innerHTML += `🏴󠁧󠁢󠁷󠁬󠁳󠁿`
    }
}