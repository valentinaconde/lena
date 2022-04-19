import React from 'react'
import './Carrusel.css';
import envios from '../../multimedia/envios.gif'


export const Carrusel = () => {
    return (
        <div className='carrusel'>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={envios} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={envios} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={envios} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        </div>
    )
}
