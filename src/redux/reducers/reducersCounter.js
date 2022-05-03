import { typesCounter } from "../types/types";

const initialState={
    count:0
}

export const reducersCounter =(state = initialState, action)=>{
        switch (action.type) {
            case typesCounter.increment:
                return{
                    count: state.count + action.payload
                }
              case typesCounter.decrement:
                    return{
                        state
                    }
               case typesCounter.reset:
                        return{
                            state
                        }
                
             
        
            default:
                return state
        }
}