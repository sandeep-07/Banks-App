import { CITY_NAME, DATA_FETCHED } from "../actions/types"

const initialData=[]

const banksReducer=(state=initialData,action)=>{

    switch(action.type){
        case DATA_FETCHED:
        return{...state,banks:action.payload}
        case CITY_NAME:
        return{...state,city:action.payload}
        default:
            return state
    }
}

export default banksReducer