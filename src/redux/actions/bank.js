import { CITY_NAME, DATA_FETCHED } from "./types"

const setBanks=(banks)=>{
    return{
        type:DATA_FETCHED,
        payload:banks
    }
}
export const setCityName=(city)=>{
    return{
        type:CITY_NAME,
        payload:city
    }
}
export default setBanks