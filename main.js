function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll(".tecla")

let contador = 0;

while(contador < ListaDeTeclas){

    const tecla = ListaDeTeclas[contador];

    const instrumento = classList[1];

    const idAudio = `#som_$(instrumento)`

    tecla.onlock = function (){
        tocaSom(idAudio); 
    }

    ListaDeTeclas[contador].onlock = function () {
        tocaSom('#som_tecla_tim');
    }

    contador = contador + 1;

    console.log(contador);
}