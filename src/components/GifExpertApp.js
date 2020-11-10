import React, { Fragment, useState } from 'react';
import { AgregarFrutas } from './AgregarFrutas';
import { GifGrid } from './GifGrid';


const GifExpertApp = ({titulo}) => {

    const [frutas, setfrutas] = useState(['' ])
    
    return(
        <Fragment>
            <h2>{titulo}</h2>
            <AgregarFrutas setfrutas={setfrutas}></AgregarFrutas>
            <hr></hr>
            <ol>
                {frutas.map((fruta) => (
                    <GifGrid
                        key={fruta}
                        fruta={fruta}
                    ></GifGrid>
                ))
                } 
            </ol>
        </Fragment>
    )
}
export default GifExpertApp  
