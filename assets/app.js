const pizzas = [
    {
      id: 1,
      nombre: "Pizza Especial",
      precio: 700,
      ingredientes:["salsa de tomates", "queso muzzarella", "Jamón", "Morrón", "aceitunas"],
      img: "https://www.region20.com.ar/images/4/5/1/6/1/0/451610_0.jpg"
    },
  
    {
      id: 2,
      nombre: "Pizza 4 Quesos",
      precio: 800,
      ingredientes:["queso muzzarella", "queso roquefort", "queso gorgonzola", "queso parmesano", "aceitunas"],
      img: "https://assets.unileversolutions.com/recipes-v2/216503.jpg?imwidth=900"

    },
  
    {
      id: 3,
      nombre: "Pizza Muzzarella",
      precio: 600,
      ingredientes:["salsa de tomates", "queso muzzarella", "aceitunas"],
      img: "https://unareceta.com/wp-content/uploads/2014/05/pizza-4-quesos.jpg"
    },
  
    {
      id: 4,
      nombre: "Pizza Rúcula y Crudo",
      precio: 900,
      ingredientes:["salsa de tomates", "queso muzzarella", "Jamón Crudo", "Rúcula"],
      img:"https://www.lavanguardia.com/files/image_948_465/uploads/2020/01/08/5e997a4340ab2.jpeg"
    },
  
    {
      id: 5,
      nombre: "Pizza Con Palmitos",
      precio: 900,
      ingredientes:["salsa de tomates", "queso muzzarella", "palmitos", "salsa golf"],
      img:"https://www.supermercedes.com.ar/napoles/wp-content/uploads/2020/05/pizzapalmitos-768x454.jpg"
    },
  
    {
      id: 6,
      nombre: "Pizza Napolitana",
      precio: 800,
      ingredientes:["salsa de tomates", "queso muzzarella", "Tomate en rodajas", "ajo"],
      img:"https://www.johaprato.com/files/styles/immagini_ricette/public/pizza-napolitana.jpg?itok=eFnvW--t"
    },
  ];

//Llamar elementos
const addForm = document.getElementById('form');
const btnSend = document.querySelector('.btn-send');
const inputId = document.querySelector('.input-id');
const resultRender = document.querySelector('.container-result');



const saveLocalStorage = listaDePizzas => {
  localStorage.setItem('pizzas', JSON.stringify(listaDePizzas));
};



const addResult = e => {
    e.preventDefault();
    const valueInput = inputId.value.trim();
    inputId.value = '';

    if (!valueInput.length) return alert('Por favor, ingresa un ID para buscar') ;
    if (valueInput == 0) {
        resultRender.innerHTML =`  <div class="result">
        
        <h4>"Por favor, ingrese un valor válido" </h4>
        </div>`
        return ;
    }

    if(Math.sign(valueInput)=== -1){
        resultRender.innerHTML =`  <div class="result">
    
        <h4>"Por favor, ingrese un valor válido" </h4>
        </div>`
        return; 
    }

    if (valueInput <= pizzas.length){
        const search = pizzas.filter((pizza) => pizza.id == valueInput);
        search.forEach((pizza) =>
        
        resultRender.innerHTML = `  <div class="result">
                                    <p class="h2-cards">${pizza.nombre}</p> 
                                    <p class="p-cards">${pizza.ingredientes} </p>
                                    <img src="${pizza.img}" alt="se rompió" class="img-pizza"/> 

                                    <h4>$ ${pizza.precio}</h4>
                                    </div>`);
                                    
        return;
    }else{
        resultRender.innerHTML = `  <div class="result">
    
        <h4>"Por favor, ingrese un valor válido" </h4>
        </div>`;
        return;
    }

}



const init = () => {
    addForm.addEventListener('submit', addResult);
    saveLocalStorage(pizzas)
};

init();
