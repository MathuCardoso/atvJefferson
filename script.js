var texto = document.getElementById('texto');
        var titulo = document.getElementById('titulo');
        var mudar = document.getElementById('mudar');


        titulo.style.color = 'red';
        titulo.style.fontSize = '20px';


        mudar.onclick = function(){


            //É preciso clicar duas vezes para aparecer a imagem (isso não foi proposital.)
        if(titulo.textContent === 'NEYMAR CONFIRMADO NO PAYSANDU.'){
            
        var imgElement = document.createElement("img");

        imgElement.src = "https://www.oliberal.com/image/contentid/policy:1.446688:1634211612/Paysandu.jpg";

        document.body.appendChild(imgElement);
        } else

        titulo.textContent = texto.value;

    }

    var gf = document.getElementById('gf');
    var gfText = document.getElementById('gfText');

    gf.onmouseenter = function(){
        gfText.textContent = 'Olá amigo, como está?';
    }

    gf.onmouseleave = function(){
        gfText.textContent = 'Não vá! Eu sou carente';
    }

    /*/ 
    gf.onmousemove = function(){
        gfText.textContent = '';
    }

    /*/
    

    gf.onclick = function(){
        gfText.textContent = 'Ei, me deixa quieto!';
    }

    var sorveteText = document.getElementById('sorveteText').value;
    var sorveteResposta = document.getElementById('sorveteResposta');

    if(sorveteText.length > 3){
        if(sorveteText == 'chocolate'){
            sorveteResposta.textContent = ''
        }
    }
