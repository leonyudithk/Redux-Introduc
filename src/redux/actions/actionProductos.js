import { typesproduct } from "../types/types"

export const AgregarProducto = (producto)=>{
    return {
        type: typesproduct.add,
        payload: producto
    }    

}