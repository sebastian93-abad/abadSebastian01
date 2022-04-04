import React from 'react'
import Contador from './contador'

export default function CartaDetalle({data}) {
    const {titulo, precio, talle, stock, cuotasSin, cuotasCon, img} = data
    




    return(
        <div className='cartaDetalle'>
            <h2>{titulo}</h2>
            <img src={img}/>
            <p>Precio : $ {precio}</p>
            <p>Talle : {talle}</p>
            <p>Stock : {stock}</p>
            <p>Envio : GRATIS</p>
            <p>Detalles: 
                <ul>
                    <li>Cuotas sin interes: {cuotasSin}</li>
                    <li>Cuotas con interes: {cuotasCon}</li>
                </ul>
            </p>
            <Contador stock={stock}/>
        </div>
    )
}