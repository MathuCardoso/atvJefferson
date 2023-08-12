var texto = document.getElementById('texto');
        var titulo = document.getElementById('titulo');
        var mudar = document.getElementById('mudar');


        titulo.style.color = 'red';
        titulo.style.fontSize = '20px';


        mudar.onclick = function(){

        titulo.textContent = texto.value;

    }

    var gf = document.getElementById('gf');
    var gfText = document.getElementById('gfText');

    gf.onmouseenter = function(){
        gfText.textContent = 'Olá amigo, como está?';
    }

    gf.onmouseleave = function(){
        gfText.textContent = 'Por favor, não vá.';
    }

    /*/ Não estava funcionando corretamente
    gf.onmousemove = function(){
        gfText.textContent = '';
    }

    /*/
    

    gf.onclick = function(){
        gfText.textContent = 'HAHAHA isso faz cócegas';
    }

    

    sorveteBtn.onclick = function(){

        var sorveteText = document.getElementById('sorveteText').value;
        var sorveteResposta = document.getElementById('sorveteResposta');
        var sorveteBtn = document.getElementById('sorveteBtn');

        if(sorveteText.length > 3){

            if(sorveteText == 'chocolate'){
                sorveteResposta.textContent = 'Jeff: Eu amo sorvete de chocolate!';
            } 
            else if(sorveteText == 'flocos'){
                sorveteResposta.textContent = 'Jeff: Ahh, mas chocolate é o meu favorito...';
            }
            else
            sorveteResposta.textContent = 'Jeff: Ahh, eu esperava um sabor de sorvete...';


        }
        else if(sorveteText == ''){
            sorveteResposta.textContent = 'Você não respondeu a pergunta!';
        } 
        else
        sorveteResposta.textContent = 'Jeff: Ahh, eu esperava um sabor de sorvete...';
    }

    //Exercício 6

    var dlMode = document.getElementById('DlMode');

    dlMode.onclick = function(){

        if(dlMode.innerHTML === 'Modo Escuro'){
        var body = document.getElementById('body');
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        dlMode.innerHTML = 'Modo Claro'
    } 
    else if(dlMode.innerHTML === 'Modo Claro'){
        var body = document.getElementById('body');
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        dlMode.innerHTML = 'Modo Escuro'
    }
    }



    function enviar(){

    var name = document.getElementById('name').value;
    var senha = document.getElementById('senha').value;
    var senhaConf = document.getElementById('senhaConf').value;
    var msgErro = document.getElementById('msgErro');

    if(!name){
        msgErro.textContent = 'Preencha o nome.';
        return false;
    }
    else if(!senha){
        msgErro.textContent = 'Preencha a senha.';
        return false;
    }
    else if(senha.length < 8){
        msgErro.textContent = 'A senha não pode ter menos que 8 caracteres.';
        return false;
    }
    else if(!senhaConf){
        msgErro.textContent = 'Confirme a senha.';
        return false;
    }
    else if(senha != senhaConf){
        msgErro.textContent = 'As senhas devem ser idênticas.';
        return false;
    } 
    else{
    msgErro.textContent = '';
    alert('Cadastro realizado com sucesso!');
    return true;

}
}

    