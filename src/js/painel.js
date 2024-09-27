const inputSubmit = document.querySelector(".enviar");

const inputCampo = document.querySelectorAll(".campo");

// const alerta = document.querySelectorAll(".obrigatorio");



inputSubmit.addEventListener('click', () => {


    inputCampo.forEach(input => {

        // input.addEventListener('change', () => {
    
            if(input.value !== ""){
                input.style.border = "solid " + 1 + "px #00C22B" ;
            }else if(input.value === ""){
                input.style.border = "solid " + 1 + "px #F52E2E" ;
                
            }
    
    
        // })
    
    
    })

});

