import { useState, useEffect  } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFectGif = (fruta) => {
    const [state, setState] = useState({
        data:[],
        loading: true
    })
    useEffect(() => {
        getGifs(fruta).then((result) => {
            setState({
                data: result,
                loading: false
            })
        })
    },[fruta])

    return state
} 
 