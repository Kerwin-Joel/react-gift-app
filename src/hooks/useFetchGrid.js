import { useEffect, useState } from "react"
import { getGift } from "../helpers/getGift";

export const useFetchGrid = (category) => {
    const [state, setState] = useState({
        data:[],
        loading: true
    });

    console.log(category)

    useEffect(()=>{
        getGift(category)
            .then(imgs=>{
                setTimeout(() => {
                setState({
                    data:imgs,
                    loading: false
                })
            }, 3000);
        })
    },[category])

    
    return state
}
