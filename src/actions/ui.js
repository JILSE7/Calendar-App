import { types } from "../types/types"



export const OpenM = ()=>{
    return {
    type: types.uiOpenModal
    }
}

export const CloseM = ()=>{
    return {
    type: types.uiCloseModal
    }
}