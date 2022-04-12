import React from 'react'
import '../styles/Footer.css'

export const Footer = () => {
    return (
        <div className='footer d-flex flex-column align-items-center'>
            <p className='footerTitle'>productos tomados de pagina GANGA HOME</p>

            <div className='redesSociales d-flex mb-2'>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-whatsapp"></i>
            </div>

            <div className='pageCreator'>
            <p className='me-1'>Pagina web creada por </p>
            <a href="https://github.com/valentinaconde/"  target="_blank">Valentina</a>
            <p>©</p>
            </div>

        </div>

    )
}
