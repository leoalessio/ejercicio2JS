const pizzas = [
    {
      id: 1,
      nombre: "Pizza Especial",
      precio: 700,
    },
  
    {
      id: 2,
      nombre: "Pizza 4 Quesos",
      precio: 800,
    },
  
    {
      id: 3,
      nombre: "Pizza Muzzarella",
      precio: 600,
    },
  
    {
      id: 4,
      nombre: "Pizza Rúcula y Crudo",
      precio: 900,
    },
  
    {
      id: 5,
      nombre: "Pizza Con Palmitos",
      precio: 900,
    },
  
    {
      id: 6,
      nombre: "Pizza Napolitana",
      precio: 800,
    },
  ];

//Llamar elementos
const addForm = document.getElementById('form');
const btnSend = document.querySelector('.btn-send');
const inputId = document.querySelector('.input-id');
const resultRender = document.querySelector('.container-result');


const addResult = e => {
    e.preventDefault();
    const valueInput = inputId.value.trim();
    inputId.value = '';

    if (!valueInput.length) return alert('Por favor, ingresa un ID para buscar') ;
    if (valueInput == 0) {
        resultRender.innerHTML =`  <div class="result">
        
        <h4>"Pusiste 0 y te dije que tiene que ser del 1 a 6" </h4>
        </div>`
        return ;
    }

    if(Math.sign(valueInput)=== -1){
        resultRender.innerHTML =`  <div class="result">
    
        <h4>"Pusiste un número negativo y te dije que tiene que ser del 1 a 6" </h4>
        </div>`
        return; 
    }

    if (valueInput <= pizzas.length){
        const search = pizzas.filter((pizza) => pizza.id == valueInput);
        search.forEach((pizza) =>
        
        resultRender.innerHTML = `  <div class="result">
                                    ${pizza.nombre} 
                                    <h4>$ ${pizza.precio}</h4>
                                    </div>`);
                                    
        return;
    }else{
        resultRender.innerHTML = `  <div class="result">
    
        <h4>"Seguí las instrucciones una vez, te dije del 1 a 6" </h4>
        </div>`;
        return;
    }

}



const init = () => {
    addForm.addEventListener('submit', addResult);
};

init();
