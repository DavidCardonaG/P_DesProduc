form.addEventListener('submit',function LocalStorage(e){
           
    let name = document.getElementById('name').value;
    let apellido = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;

    if(name=="" || apellido=="" || email==""){
         alert('Ingresar todos los campos');
         return true;
    }
    else{
        if(isNaN()){
            localStorage.setItem("Nombre", name);
            localStorage.setItem("Apellido", apellido);
            localStorage.setItem("Email", email);
            alert(`GRACIAS ${name} POR REGISTRASE, AHORA HACES PARTE DE ADIDAS COMPANY`);
        }else{
             alert("INCORRECTO");
        }
        return false;
    }
})

import {data} from '../data/data.js';

const templete = document.getElementById('template-product').content;
const fragment = document.createDocumentFragment();
const products = document.getElementById('products');

document.addEventListener('DOMContentLoaded', () => {
    loadProduct(data);
})

const loadProduct = (data) => {
    data.forEach(productos => {
        const{id,nombre,imagen,caracteristicas,precio} = productos;
        templete.querySelector('h5').textContent = nombre;
        templete.querySelector('img').setAttribute('src',imagen);
        templete.querySelector('img').dataset.id = id
        templete.querySelector('p').textContent = caracteristicas;
        templete.querySelector('span').textContent = precio;
        const clone = templete.cloneNode(true);
        fragment.appendChild(clone);
        
    });
    products.appendChild(fragment);
}

products.addEventListener('click', e => {

    let idTarget = e.target.dataset.id;

    data.forEach(productos => {

        const{id,nombre,imagen,caracteristicas,precio} = productos;

        if(id == idTarget) {

            const obj = {
                id: id,
                nombre: nombre,
                caracteristicas: caracteristicas,
                imagen: imagen,
                precio: precio
            }
            localStorage.setItem("Producto",JSON.stringify(obj));
        }
    })
    e.stopPropagation();
    e.preventDefault();
})


