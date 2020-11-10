import React, { Fragment } from 'react'
import { GifGridItem } from './GifGridItem';
import { useFectGif } from '../hooks/useFecthGif';

export const GifGrid = ({fruta}) => {

    //const [images, setImages] = useState([])
    const {data,loading} = useFectGif(fruta)

    return (  
        <Fragment>
            <h3>{fruta}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">
                {
                    data.map((img) => (
                    <GifGridItem
                        key={img.id}
                        {...img}
                        //img={img}
                    ></GifGridItem>
                    ))   
                }
        </div>
        </Fragment>
    )

}
