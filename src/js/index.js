
const itensPerguntasErespostas = document.querySelectorAll(".item")

itensPerguntasErespostas.forEach(function(item) {
    item.addEventListener("click", function(){
        const itemAtivoAtual = document.querySelector(".ativo")

        if(itemAtivoAtual){
            itemAtivoAtual.classList.remove("ativo")
        } else{
        
            item.classList.add("ativo");
        }       
     
    })
})
