import { toast } from 'react-toastify';
import { ADD, REMOVE } from '../actions/types';

const initialData={
    favList:[],
    favString:""
}

const favouritesReducer=(state=initialData,action)=>{
    
    switch(action.type){
        case ADD:
        const itemExists=state?.favList.some((bank)=>bank.ifsc===action.payload.ifsc)
        if(!itemExists)
        {
            toast.success('Added to Favourites')
            return{favList:[...state.favList,action.payload],favString:state.favString+action.payload.ifsc}
        }
        else{
            toast.success('Already added in Favourites')
        }
        case REMOVE:
            const tempFav=state?.favList.filter((bank)=>bank.ifsc!==action.payload)
            const newFavStrinG=state.favString.replace(action.payload,"")
            return {favList:tempFav,favString:newFavStrinG}
        default:
            return state
    }
}

export default favouritesReducer