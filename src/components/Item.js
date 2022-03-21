import React from 'react'

export const Item = (imagen, titulo, descripcion) => {

    let items = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(); 
        }, 2000);
    });


    items.then((res) => {
        
        return (
            <div class="card">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${titulo}</h5>
                    <a href="..." class="btn btn-primary">Ver descripcion</a>
                </div>
            </div>
        )


    })

}
