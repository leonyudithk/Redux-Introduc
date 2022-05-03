import { typesCounter } from "../types/types"

export const actionIncrementarSync =()=>{
    return{
        type: typesCounter.increment,
        payload: 2
    }
}

