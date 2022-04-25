import { toast } from "react-toastify"
import { ADD, REMOVE } from "./types"

const addToFav=(bank)=>{
  
    return{
        type:ADD,
        payload:bank
    }
}
export const remove=(id)=>{
    toast.success('Removed from Favourites')
    return{
        type:REMOVE,
        payload:id
    }
}

export default addToFav